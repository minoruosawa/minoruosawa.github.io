---
layout: default
title: M.Osawa's Website
---

{% include profile.html %}

Scheduled Talks: [ITEA Conference 2026](https://www.itea2026.com/) June 17-19 (Bergamo, Italy). 

<section class="top-block">
<h2>Research</h2>

<p class="mobile-center"><a href="/summary/">Research summary</a></p>

<h3>Publications</h3>

<ul class="ref-list">
  {% for paper in site.data.papers %}
    {% include pub_item.html paper=paper %}
  {% endfor %}
</ul>

<h3>Discussion Papers</h3>
<ul class="ref-list">
    <li><a href="https://arxiv.org/abs/2207.05346">Origin of power laws and their spatial fractal structure for city-size distributions</a> (2024) [<a href="https://arxiv.org/pdf/2207.05346">paper</a>] <br> (with T.&thinsp;Mori, T.&thinsp;Akamatsu, and Y.&thinsp;Takayama)</li>
    <li><a href="https://arxiv.org/abs/2603.09539">Sampling logit equilibrium and endogenous payoff distortion</a> (2026) [<a href="notes/draft/SLD.pdf">paper</a>] [<a href="notes/draft/SLD_slides.pdf">slides</a>]</li>
    <li><a href="https://arxiv.org/abs/2011.06778">Most likely retail agglomeration patterns</a> (2025) (with T.&thinsp;Akamatsu and Y.&thinsp;Kogure)</li>
    <li><a href="https://arxiv.org/abs/2512.06402">Innovation, spillovers and economic geography</a> (2025) (with J.&thinsp;M.&thinsp;Gaspar)</li>
    <li><a href="https://arxiv.org/abs/2001.05095">Production externalities and dispersion process in a multi-region economy</a> (2021) (with J.&thinsp;M.&thinsp;Gaspar)</li>
</ul>

<h3>Works in Progress</h3>
<ul class="ref-list">
    <li>Understanding regional dynamics (2025) [<a href="notes/draft/RD.pdf">draft</a>] [<a href="notes/draft/RD_slides.pdf">slides</a>]</li>
    <li>Social interactions, technological externalities, and urban spatial structure (with H.&thinsp;Konishi)</li>
    <li>Non-monocentric urban spatial structure in two dimensions (with T.&thinsp;Akamatsu, T.&thinsp;Sakai)</li>
</ul>
</section>

{% include experience.html %}

{% include other.html %}
