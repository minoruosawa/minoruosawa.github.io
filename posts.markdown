---
layout: default
title: Minoru Osawa - Posts
permalink: /posts/
description: Thoughts on various matters. 
lang: ja
---

<section class="posts-container" aria-labelledby="posts-title">
<h1 id="posts-title" class="posts-header">Posts</h1>

<p class="posts-description mobile-center">日記や入門的解説などです．<a href="/policies/#disclaimer">免責事項</a></p>

<ul class="posts">
{% for post in site.posts %}
    <li>
    <a href="{{ post.url }}">{{ post.title }}</a> <time class="date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b&thinsp;%d,&thinsp;%y" }}</time>
    </li>
{% endfor %}
</ul>

</section>
