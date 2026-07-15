---
layout: default
title: Minoru Osawa - Research
permalink: "/research/"
description: Publications and ongoing projects.
---

<h1>Research</h1>

<p class="mobile-center"><a href="/summary/">Research summary</a></p>

<h2>Publications</h2>

{% assign sorted_papers = site.data.papers | sort: "year" | reverse %}
{% assign key_papers = sorted_papers | where: "keypub", true %}
{% assign other_papers = sorted_papers | where_exp: "paper", "paper.keypub != true" %}

<ul class="pub-list">
  {% for paper in key_papers %}
    {% include pub_item.html paper=paper %}
  {% endfor %}
</ul>

<details class="my_description">
  <summary>Other articles ({{ other_papers.size }})</summary>
  <ul class="pub-list">
    {% for paper in other_papers %}
      {% include pub_item.html paper=paper %}
    {% endfor %}
  </ul>
</details>


<h2>Discussion Papers</h2>
<ul class="pub-list">
    <li><a href="https://arxiv.org/abs/2207.05346">Origin of power laws and their spatial fractal structure for city-size distributions</a> (2024) [<a href="https://arxiv.org/pdf/2207.05346">paper</a>] <br> (with T.&thinsp;Mori, T.&thinsp;Akamatsu, and Y.&thinsp;Takayama)</li>
    <li><a href="https://arxiv.org/abs/2603.09539">Sampling logit equilibrium and endogenous payoff distortion</a> (2026) [<a href="/notes/draft/SLD.pdf">paper</a>] [<a href="/notes/draft/SLD_slides.pdf">slides</a>]</li>
    <li><a href="https://arxiv.org/abs/2011.06778">Most likely retail agglomeration patterns</a> (2025) (with T.&thinsp;Akamatsu and Y.&thinsp;Kogure)</li>
    <li><a href="https://arxiv.org/abs/2512.06402">Innovation, spillovers and economic geography</a> (2025) (with J.&thinsp;M.&thinsp;Gaspar)</li>
    <li><a href="https://arxiv.org/abs/2001.05095">Production externalities and dispersion process in a multi-region economy</a> (2021) (with J.&thinsp;M.&thinsp;Gaspar)</li>
</ul>

<h2>Works in Progress</h2>
<ul class="pub-list">
    <li>Understanding regional dynamics (2025) [<a href="/notes/draft/RD.pdf">draft</a>] [<a href="/notes/draft/RD_slides.pdf">slides</a>] [<a href="/notes/draft/RD_poster_ja.pdf">poster(ja)</a>]</li>
    <li>Social interactions, technological externalities, and urban spatial structure (with H.&thinsp;Konishi)</li>
    <li>Non-monocentric urban spatial structure in two dimensions (with T.&thinsp;Akamatsu, T.&thinsp;Sakai)</li>
</ul>

<h2>和文論文</h2>

<ul class="pub-list">
<li><a href="https://researchmap.jp/minoru_osawa/published_papers" style="text-decoration: underline;">researchmap</a> をご覧ください．</li>
</ul>
