import { UrbanSimulation } from "./urban-sim.js";

const sliderSpecs = [
  {
    key: "amenityWeight",
    label: "Amenity Weight (<code>a</code>)",
    min: 0,
    max: 3,
    step: 0.1,
    value: 0.2,
  },
  {
    key: "travelCost",
    label: "Travel Cost (<code>tau</code>)",
    min: 0.02,
    max: 0.45,
    step: 0.01,
    value: 0.06,
  },
  {
    key: "agglomerationWeight",
    label: "Agglomeration (<code>g</code>)",
    min: 0,
    max: 2,
    step: 0.1,
    value: 0.1,
  },
  {
    key: "crowdingWeight",
    label: "Congestion (<code>c</code>)",
    min: 0,
    max: 6,
    step: 0.1,
    value: 3.0,
  },
  {
    key: "moveRate",
    label: "Relocation Share (<code>rho</code>)",
    min: 0.01,
    max: 0.45,
    step: 0.01,
    value: 0.05,
  },
];

const fixedParams = {
  logitScale: 10,
};

const MAX_AUTO_STEPS = 100;

const simulation = new UrbanSimulation({ gridSize: 50, seed: 11 });
const sliderGroup = document.querySelector("#slider-group");
const playToggle = document.querySelector("#play-toggle");
const stepButton = document.querySelector("#step-once");
const resetButton = document.querySelector("#reset");

const metrics = {
  step: document.querySelector("#time-step"),
  entropy: document.querySelector("#entropy-value"),
  peakShare: document.querySelector("#peak-share-value"),
  peakChoice: document.querySelector("#peak-choice-value"),
};

const canvases = {
  amenity: document.querySelector("#amenity-canvas"),
  population: document.querySelector("#population-canvas"),
  choice: document.querySelector("#choice-canvas"),
};

const contexts = {
  amenity: canvases.amenity.getContext("2d"),
  population: canvases.population.getContext("2d"),
  choice: canvases.choice.getContext("2d"),
};

let animationFrame = null;
let running = false;

function getParams() {
  const params = { ...fixedParams };
  for (const spec of sliderSpecs) {
    params[spec.key] = Number(document.querySelector(`#${spec.key}`).value);
  }
  return params;
}

function formatValue(value) {
  return Number(value).toFixed(2);
}

function buildSliders() {
  sliderGroup.innerHTML = sliderSpecs
    .map(
      (spec) => `
        <div class="slider">
          <div class="slider-header">
            <label for="${spec.key}">${spec.label}</label>
            <output id="${spec.key}-output">${formatValue(spec.value)}</output>
          </div>
          <input
            id="${spec.key}"
            type="range"
            min="${spec.min}"
            max="${spec.max}"
            step="${spec.step}"
            value="${spec.value}"
          >
        </div>
      `,
    )
    .join("");

  for (const spec of sliderSpecs) {
    const input = document.querySelector(`#${spec.key}`);
    const output = document.querySelector(`#${spec.key}-output`);
    input.addEventListener("input", () => {
      output.value = formatValue(input.value);
      if (!running) {
        renderProjectedState();
      }
    });
  }
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function colorRamp(t) {
  const clamped = Math.max(0, Math.min(1, t));
  const anchors = [
    [22, 36, 44],
    [15, 118, 110],
    [244, 176, 85],
    [154, 52, 18],
  ];

  const scaled = clamped * (anchors.length - 1);
  const index = Math.min(anchors.length - 2, Math.floor(scaled));
  const localT = scaled - index;
  const start = anchors[index];
  const end = anchors[index + 1];

  return [
    Math.round(lerp(start[0], end[0], localT)),
    Math.round(lerp(start[1], end[1], localT)),
    Math.round(lerp(start[2], end[2], localT)),
  ];
}

function paintGrid(ctx, values, gridSize) {
  let minValue = Infinity;
  let maxValue = -Infinity;
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] < minValue) {
      minValue = values[i];
    }
    if (values[i] > maxValue) {
      maxValue = values[i];
    }
  }

  const span = Math.max(maxValue - minValue, 1e-12);
  const image = ctx.createImageData(gridSize, gridSize);

  for (let i = 0; i < values.length; i += 1) {
    const normalized = (values[i] - minValue) / span;
    const [r, g, b] = colorRamp(normalized);
    const offset = i * 4;
    image.data[offset] = r;
    image.data[offset + 1] = g;
    image.data[offset + 2] = b;
    image.data[offset + 3] = 255;
  }

  const bitmap = document.createElement("canvas");
  bitmap.width = gridSize;
  bitmap.height = gridSize;
  bitmap.getContext("2d").putImageData(image, 0, 0);

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(bitmap, 0, 0, ctx.canvas.width, ctx.canvas.height);
}

function updateMetrics(snapshot) {
  let peakShare = 0;
  let peakChoice = 0;
  for (let i = 0; i < snapshot.population.length; i += 1) {
    if (snapshot.population[i] > peakShare) {
      peakShare = snapshot.population[i];
    }
    if (snapshot.choiceProbabilities[i] > peakChoice) {
      peakChoice = snapshot.choiceProbabilities[i];
    }
  }

  metrics.step.textContent = String(snapshot.time) + '/' + String(MAX_AUTO_STEPS);
  metrics.entropy.textContent = snapshot.entropy.toFixed(3);
  metrics.peakShare.textContent = peakShare.toFixed(4);
  metrics.peakChoice.textContent = peakChoice.toFixed(4);
}

function renderSnapshot(snapshot) {
  paintGrid(contexts.amenity, snapshot.amenity, snapshot.gridSize);
  paintGrid(contexts.population, snapshot.population, snapshot.gridSize);
  paintGrid(contexts.choice, snapshot.choiceProbabilities, snapshot.gridSize);
  updateMetrics(snapshot);
}

function renderProjectedState() {
  renderSnapshot(simulation.project(getParams()));
}

function tick() {
  const snapshot = simulation.step(getParams());
  renderSnapshot(snapshot);

  if (snapshot.time >= MAX_AUTO_STEPS) {
    setRunning(false);
    return;
  }

  if (running) {
    animationFrame = window.setTimeout(() => {
      window.requestAnimationFrame(tick);
    }, 80);
  }
}

function setRunning(nextState) {
  running = nextState;
  playToggle.textContent = running ? "Pause" : "Start";

  if (!running && animationFrame !== null) {
    window.clearTimeout(animationFrame);
    animationFrame = null;
    return;
  }

  if (running) {
    tick();
  }
}

buildSliders();
renderProjectedState();

playToggle.addEventListener("click", () => {
  setRunning(!running);
});

stepButton.addEventListener("click", () => {
  if (running) {
    setRunning(false);
  }
  renderSnapshot(simulation.step(getParams()));
});

resetButton.addEventListener("click", () => {
  if (running) {
    setRunning(false);
  }
  simulation.reset();
  renderProjectedState();
});
