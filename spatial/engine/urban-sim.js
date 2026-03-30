const EPSILON = 1e-12;

function mulberry32(seed) {
  let state = seed >>> 0;
  return function random() {
    state += 0x6d2b79f5;
    let value = Math.imul(state ^ (state >>> 15), 1 | state);
    value ^= value + Math.imul(value ^ (value >>> 7), 61 | value);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function normalize(array) {
  let total = 0;
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }

  if (total <= EPSILON) {
    const uniform = 1 / array.length;
    for (let i = 0; i < array.length; i += 1) {
      array[i] = uniform;
    }
    return array;
  }

  for (let i = 0; i < array.length; i += 1) {
    array[i] /= total;
  }

  return array;
}

function softmax(values, scale) {
  let maxValue = -Infinity;
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] > maxValue) {
      maxValue = values[i];
    }
  }

  const result = new Float64Array(values.length);
  let total = 0;

  for (let i = 0; i < values.length; i += 1) {
    const transformed = Math.exp(scale * (values[i] - maxValue));
    result[i] = transformed;
    total += transformed;
  }

  if (total <= EPSILON) {
    const uniform = 1 / values.length;
    result.fill(uniform);
    return result;
  }

  for (let i = 0; i < result.length; i += 1) {
    result[i] /= total;
  }

  return result;
}

function copyArray(values) {
  return new Float64Array(values);
}

function entropy(shares) {
  let value = 0;
  for (let i = 0; i < shares.length; i += 1) {
    const share = shares[i];
    if (share > EPSILON) {
      value -= share * Math.log(share);
    }
  }
  return value;
}

export class UrbanSimulation {
  constructor(options = {}) {
    this.gridSize = options.gridSize ?? 50;
    this.cellCount = this.gridSize * this.gridSize;
    this.coords = this.buildCoordinates();
    this.distanceMatrix = this.buildDistanceMatrix();
    this.amenity = this.buildAmenitySurface(options.seed ?? 7);
    this.defaultPopulation = this.buildInitialPopulation();
    this.utilityTerms = this.buildUtilityTerms();
    this.reset();
  }

  buildCoordinates() {
    const coords = new Array(this.cellCount);
    let index = 0;

    for (let y = 0; y < this.gridSize; y += 1) {
      for (let x = 0; x < this.gridSize; x += 1) {
        coords[index] = { x, y };
        index += 1;
      }
    }

    return coords;
  }

  buildDistanceMatrix() {
    const distances = new Float32Array(this.cellCount * this.cellCount);

    for (let i = 0; i < this.cellCount; i += 1) {
      const origin = this.coords[i];
      const rowOffset = i * this.cellCount;

      for (let j = 0; j < this.cellCount; j += 1) {
        const destination = this.coords[j];
        const dx = origin.x - destination.x;
        const dy = origin.y - destination.y;
        distances[rowOffset + j] = Math.hypot(dx, dy);
      }
    }

    return distances;
  }

  buildAmenitySurface(seed) {
    const random = mulberry32(seed);
    const amenity = new Float64Array(this.cellCount);
    const center = (this.gridSize - 1) / 2;
    const corridorX = this.gridSize * 0.62;
    let index = 0;

    for (let y = 0; y < this.gridSize; y += 1) {
      for (let x = 0; x < this.gridSize; x += 1) {
        const radial = Math.exp(-(((x - center) ** 2 + (y - center) ** 2) / 260));
        const waterfront = Math.exp(-((x - corridorX) ** 2) / 42) * (0.3 + 0.7 * (y / (this.gridSize - 1)));
        const diagonal = Math.exp(-((x - y - 8) ** 2) / 60);
        const noise = random() * 0.28;
        amenity[index] = 0.65 * radial + 0.45 * waterfront + 0.2 * diagonal + noise;
        index += 1;
      }
    }

    let minValue = Infinity;
    let maxValue = -Infinity;
    for (let i = 0; i < amenity.length; i += 1) {
      if (amenity[i] < minValue) {
        minValue = amenity[i];
      }
      if (amenity[i] > maxValue) {
        maxValue = amenity[i];
      }
    }

    const span = Math.max(maxValue - minValue, EPSILON);
    for (let i = 0; i < amenity.length; i += 1) {
      amenity[i] = (amenity[i] - minValue) / span;
    }

    return amenity;
  }

  buildInitialPopulation() {
    const baseline = new Float64Array(this.cellCount);
    const center = (this.gridSize - 1) / 2;

    for (let i = 0; i < baseline.length; i += 1) {
      const { x, y } = this.coords[i];
      const radius = Math.hypot(x - center, y - center);
      baseline[i] = 0.25 + Math.exp(-(radius ** 2) / 420) + 0.35 * this.amenity[i];
    }

    return normalize(baseline);
  }

  buildUtilityTerms() {
    return [
      {
        key: "amenity",
        compute: ({ amenity }) => amenity,
      },
      {
        key: "accessibility",
        compute: ({ population, distanceMatrix, cellCount, params }) => {
          const values = new Float64Array(cellCount);
          for (let i = 0; i < cellCount; i += 1) {
            const rowOffset = i * cellCount;
            let total = 0;
            for (let j = 0; j < cellCount; j += 1) {
              total += population[j] * Math.exp(-params.travelCost * distanceMatrix[rowOffset + j]);
            }
            values[i] = total;
          }
          return values;
        },
      },
      {
        key: "crowding",
        compute: ({ population, distanceMatrix, cellCount }) => {
          const values = new Float64Array(cellCount);
          for (let i = 0; i < cellCount; i += 1) {
            const rowOffset = i * cellCount;
            let total = 0;
            for (let j = 0; j < cellCount; j += 1) {
              total += population[j] / (1 + distanceMatrix[rowOffset + j]);
            }
            values[i] = total;
          }
          return values;
        },
      },
    ];
  }

  reset() {
    this.population = new Float64Array(this.defaultPopulation);
    this.choiceProbabilities = new Float64Array(this.defaultPopulation);
    this.utility = new Float64Array(this.cellCount);
    this.termValues = {};
    this.time = 0;
  }

  evaluateUtility(params) {
    const state = {
      amenity: this.amenity,
      population: this.population,
      distanceMatrix: this.distanceMatrix,
      cellCount: this.cellCount,
      params,
    };

    const termValues = {};
    for (const term of this.utilityTerms) {
      termValues[term.key] = term.compute(state);
    }

    const utility = new Float64Array(this.cellCount);
    for (let i = 0; i < this.cellCount; i += 1) {
      utility[i] =
        params.amenityWeight * termValues.amenity[i] +
        params.agglomerationWeight * termValues.accessibility[i] -
        params.crowdingWeight * termValues.crowding[i];
    }

    this.utility = utility;
    this.termValues = termValues;
    return utility;
  }

  project(params) {
    const utility = this.evaluateUtility(params);
    this.choiceProbabilities = softmax(utility, params.logitScale);
    return this.snapshot();
  }

  step(params) {
    const utility = this.evaluateUtility(params);
    const choiceProbabilities = softmax(utility, params.logitScale);
    const nextPopulation = new Float64Array(this.cellCount);

    for (let i = 0; i < this.cellCount; i += 1) {
      nextPopulation[i] =
        (1 - params.moveRate) * this.population[i] +
        params.moveRate * choiceProbabilities[i];
    }

    this.population = normalize(nextPopulation);
    this.choiceProbabilities = choiceProbabilities;
    this.time += 1;

    return this.snapshot();
  }

  snapshot() {
    return {
      gridSize: this.gridSize,
      time: this.time,
      amenity: copyArray(this.amenity),
      population: copyArray(this.population),
      choiceProbabilities: copyArray(this.choiceProbabilities),
      utility: copyArray(this.utility),
      entropy: entropy(this.population),
      coords: this.coords,
      termValues: this.termValues,
    };
  }
}
