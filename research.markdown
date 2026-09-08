---
layout: default
title: Minoru Osawa - Research
permalink: "/research/"
description: Publications and ongoing projects.
---

<h1>Research</h1>

<p class="mobile-center"><a href="/summary/">Research summary</a></p>

<h2>Selected Works</h2>

{% assign sorted_papers = site.data.papers | sort: "year" | reverse %}
{% assign key_papers = sorted_papers | where: "keypub", true %}
{% assign other_papers = sorted_papers | where_exp: "paper", "paper.keypub != true" %}

<ul class="pub-list research-pub-list">
{% for paper in key_papers %}
    {% include pub_item.html paper=paper %}
{% endfor %}
</ul>

<h2>Works in Progress</h2>
<ul class="pub-list research-pub-list">
{% for draft in site.data.draft %}
    {% include draft_item.html draft=draft %}
{% endfor %}
</ul>


<h2>Publications</h2>
<ul class="pub-list research-pub-list">
{% for paper in sorted_papers %}
    {% include pub_item.html paper=paper %}
{% endfor %}
</ul>

<h2>和文論文 / Publications in Japanese</h2>

<ul class="mobile-center pub-list research-pub-list"><li><a href="https://researchmap.jp/minoru_osawa/published_papers" style="text-decoration: underline;">researchmap</a> をご覧ください．</li></ul>
