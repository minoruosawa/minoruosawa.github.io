---
layout: "doc"
title: "M.Osawa - Research Summary"
permalink: "/summary/"
---

<style>
    .post-content { border: none; }
    p { letter-spacing: -0.001em !important; }
</style>

<h1>Research Summary</h1>

<span style="display:block; text-align:right;">January 2026</span>

<span style="display:block; text-align:right;"><a href="/notes/Research-summary_Minoru-Osawa_February_2026.pdf">PDF version</a></span>

With more than half of humanity residing in cities and two-thirds projected to do so by mid-century, urban environments have become the primary arena where economic interactions occur. Understanding urban systems is now central to understanding the global economy itself. Spatial phenomena, ranging from traffic congestion to urbanization, emerge from the complex interplay of individual decisions constrained by geography and markets and thus have been major subjects in economics.

My research has shown that a small number of fundamental principles may play a central role in shaping the formation, growth, and decline of cities, through their close interaction with transportation costs between locations. By clarifying these core mechanisms behind economic agglomeration and dispersion, my works lay the groundwork for thinking about long-run urban and regional policies. While quantitative spatial models have become central to contemporary urban economics, my project is complementary to this line of work, as discussed below.


<h2>1. Core Mechanisms of Economic Agglomeration</h2>

Urban development often displays patterns that seem contradictory at first glance. In Japan, for instance, urban populations became increasingly concentrated in larger cities during the five decades from 1970 to 2020. At the same time, however, suburbanization occurs in each city: population distributions within individual cities grew more spatially dispersed. This dual pattern, economy-wide concentration (or “global” agglomeration) combined with intraurban decentralization (or “local” spreading), has also been observed in many different countries such as the US, China, and France.

In “**Spatial scale of agglomeration and dispersion: Number, spacing, and the spatial extent of cities**” (with T. Mori, T. Akamatsu, Y. Takayama; R&R at _Journal of Urban Economics_), I theoretically examine how a general class of spatial economic models of population distribution across cities can account for this dual pattern of urban growth. The analysis deliberately focuses on _endogenous economic forces_, namely forces arising from transport costs and the endogenous spatial distribution of population, and abstracts from exogenous location-specific heterogeneity such as innate amenities, productivity differences, or geographical accessibility. Even in the absence of these important exogenous factors, our framework shows that declining transport costs can generate an outcome in which only a small number of cities grow larger, while at the same time these cities become more spatially dispersed internally.

The key insight is to distinguish between the “spatial scale” of dispersion forces: _local_ dispersion forces operating _within_ cities and _global_ dispersion forces operating _across_ cities. Local dispersion forces, such as those stemming from the inelastic supply of housing, generate congestion pressures that push population toward the periphery of each city. In contrast, global dispersion forces, such as market crowding arising from intercity trade, create negative spillovers across locations, under which smaller cities located near larger ones become less viable for firms due to intensified competition. Technically, for each specific spatial equilibrium model, the two types of dispersion forces can be formally distinguished by how the transport cost matrix enters the location choice incentive of mobile agents (firms or households), independently of specific microfoundations of the model. 

Importantly, these two types of dispersion forces imply fundamentally different equilibrium configurations and comparative statics with respect to transport interventions (e.g., construction of highways). For example, the study showed that lowering transport costs tend to promote population dispersion across cities when local dispersion forces dominate, but foster further agglomeration toward a smaller number of core cities when global dispersion forces are important. Consequently, transport policies intended to support peripheral cities may succeed or backfire depending on whether the underlying model adequately captures the relevant dispersion forces. 

This perspective is directly relevant for understanding the scope and limitations of conventional _quantitative spatial models_ (QSMs). Over the past decade, the rise of QSMs has revolutionized the field of urban and regional economics by enabling disciplined policy counterfactuals in realistic, many-location environments with rich exogenous heterogeneity. This progress has vastly expanded our capacity to measure and evaluate spatial policy. However, conventional QSMs largely emphasize local dispersion forces, and hence they tend to predict decentralization in response to lowering transport costs. This can restrict the range of distributional outcomes QSMs can produce and, in turn, can limit the policy conclusions one may draw from them. Our contribution complements the QSM literature by providing a structured way to incorporate and assess qualitatively different endogenous dispersion forces, thereby enhancing the interpretability and policy relevance of quantitative counterfactual analyses. 

I have further extended this perspective of the “Spatial Scale” paper as follows:

<h3>City-size distribution</h3>

In “**Origin of power laws and their spatial fractal structure for city-size distributions**” (with T. Mori, T. Akamatsu, and Y. Takayama), we build on the “Spatial Scale” framework to explain the emergence of power laws in city-size distributions, a central empirical regularity in urban economics, based solely on endogenous economic forces. The spatial scale paper shows that a system of multiple disjoint cities, such as Tokyo, Osaka, and Nagoya, can be stable only in the presence of sufficiently strong global dispersion forces, and that the distances between these cities reflect the spatial reach of economic interactions. The central contribution of the “Origin of Power Laws” paper is to show that introducing multiple types of economic interactions under global dispersion forces generates an endogenous hierarchy of cities. Specifically, when agents consume multiple goods characterized by different degrees of scale economies, cities self-organize in equilibrium into a nested, multi-scale structure. This hierarchical organization naturally gives rise to power-law city-size distributions and an associated spatial fractal structure, thereby providing a unified explanation for these empirical regularities.

<h3>Dynamic models</h3>

In a still early-stage project, “**Understanding regional dynamics**,” I extend my analysis to a canonical dynamic spatial model with overlapping generations to show that the local versus global distinction remains relevant in this important context. I demonstrate that the emergence of multiple cities in dynamic spatial models may require the presence of strong global dispersion forces, which collaborates with the insights from the spatial scale paper.

<h3>Mathematical foundations</h3>

A technical paper, “**Harris and Wilson (1978) revisited**” (with T. Akamatsu and Y. Takayama, Journal of Regional Science), in which I show that seemingly different spatial models yield common implications for how spatial patterns evolve as transport costs change, is a direct predecessor that motivates the “Spatial Scale” paper. I have also pursued a further mathematically oriented line of work to strengthen the theoretical foundation for spatial economic models: “**Perturbed cusp catastrophe in a population game**” (with K. Ikeda, Y. Takayama, and J.M. Gaspar; _Journal of Regional Science_), 
“**Breaking and sustaining bifurcations in $S_N$-invariant equidistant economy**” (with H. Aizawa, K. Ikeda, and J.M. Gaspar; _International Journal of Bifurcation and Chaos_), 
“**Time evolution of city distributions in Germany: Group-theoretic spectrum analysis**” (with K. Ikeda and Y. Takayama; _Networks and Spatial Economics_), 
“**Production externalities and dispersion process in a multi-region economy**” (with J.M. Gaspar), and 
“**Innovation, spillovers, and economic geography**” (with J.M. Gaspar). 

<div class="lozenge-row"></div>

Ultimately, this line of research on core mechanisms for economic agglomeration provides a unified conceptual framework for understanding how different spatial models generate different endogenous spatial patterns, which is essential for designing country-wide transport policies based on spatial models.

<h2>2. Urban Spatial Structure and Potential Game Method</h2>

The second pillar of my work aims to develop _analytical tools_ for spatial models and is complementary to research discussed earlier. In doing so, I build on the theory of large-population potential games. While I must restrict the attention to a subset of spatial models for which interactions between locations admit a certain symmetric structure, potential game theory enables stability analysis and equilibrium refinement in otherwise intractable settings. 

In many central models of urban economics, spatial outcomes are shaped by the interaction of heterogeneous actors, in particular firms and households, competing through land markets and linked by commuting and/or trade. These interactions generate rich internal city structures but also complicate equilibrium analysis, as market-clearing and best-response conditions across multiple types often make stability analysis of equilibrium intractable under standard methods. 

In “**Equilibrium refinement for a model of non-monocentric internal structures of cities: A potential game approach**” (with T. Akamatsu; _Journal of Economic Theory_), taking the seminal Fujita and Ogawa (1982) model, I address this challenge by reformulating the model as a large-population potential game. The reformulation allows us to interpret endogenous economic forces through the structure of a single, scalar-valued potential function. In the context of the Fujita–Ogawa model, the function reveals how commuting costs act as an aggregation force that glues firms and households while simultaneously generating dispersion forces through land-market competition. Furthermore, it enables equilibrium refinement and stability analysis to be conducted systematically. 

In particular, this study found that the comparative statics of spatial equilibria with respect to transport costs are surprisingly similar to those obtained in the spatial models studied in the “Spatial Scale” paper discussed earlier. This similarity is nontrivial, since the applicability of the potential game approach relies on a strong symmetry condition on spatial externalities, whereas the “Spatial Scale” paper allows for general asymmetric externalities. This similarity suggests the possibility of mapping broad classes of spatial models into tractable subsets that admit potential functions, a connection that may be of quantitative relevance, as briefly discussed in the next section. 

In “**Most likely retail agglomeration patterns**”, I have demonstrated the versatility of the potential game approach by applying the method to a model of retail agglomeration to clarify how gravity-type shopping flows dictate the stability of retail clusters. Also, I am currently expanding this framework in “**Social interactions, technological externalities, and urban spatial structure**” (with H. Konishi), where I apply the potential game approach to urban models with heterogeneous agents, nesting a wide range of existing frameworks and clarifying how different interaction channels jointly shape equilibrium configurations.

This second pillar of my research offers a methodological complement to the first, by clarifying what becomes possible once a spatial model admits a potential representation. The existence of a potential function allows equilibria to be ranked and selected based on stability criteria, rather than treated as observationally equivalent outcomes. It also provides a transparent way to analyze how equilibria emerge, disappear, or transition as parameters change in environments with multiple steady states. As we focus on symmetric externalities, this approach is not a universal solution, but as a focused analytical complement to the broader structural understanding of general spatial models as discussed in the previous section. 

<div class="lozenge-row"></div>

Beyond spatial applications, my work also contributes to the theory of large-population games itself. In “**Sampling logit equilibrium and endogenous payoff distortion**,” I develop a new equilibrium concept that addresses corrective decision-making under idiosyncratic and sampling noises, laying a methodological groundwork for future applications in spatial political economy.

<h2>3. Prospects</h2>

Taken together, the two strands of my research ultimately aim to tackle spatial environments in which _multiple equilibria_ arise endogenously. In settings with self-reinforcing agglomeration forces, long-run spatial outcomes are not pinned down ex ante, and policy interventions may alter not only marginal allocations but also equilibrium selection itself. Ignoring this feature may be innocuous for short-run or local counterfactuals, but it becomes increasingly problematic for the evaluation of large-scale, long-horizon policies whose distributional consequences hinge on the emergence and persistence of spatial patterns.

From this perspective, allowing for equilibrium multiplicity is not merely a technical complication but a necessary step toward more credible and informative policy analysis. The challenge, however, is that fully general models with asymmetric externalities and multiple equilibria are analytically intractable in many quantitative settings. 

A promising direction is therefore to seek structured representations that preserve the economically relevant forces while remaining amenable to analysis. Mapping general spatial models into tractable subclasses that admit potential functions may offers one such avenue. Even when the mapping is only approximate, a potential-based formulation can serve as a surrogate model that captures the comparative statics and stability properties relevant for policy evaluation. This approach provides a disciplined way to organize parameter estimation, equilibrium selection, assess robustness, and interpret counterfactual outcomes in environments where multiplicity is intrinsic rather than incidental. 

I view the development of such surrogate representations as a key step toward extending QSMs beyond conventional unique-equilibrium benchmarks where much of the observed variation is attributed to structural residuals. By clarifying how endogenous agglomeration and dispersion forces shape long-run spatial outcomes, this line of work aims to strengthen the foundations of QSM-based policy analysis and to improve our ability to evaluate interventions whose effects unfold across locations and over time.
