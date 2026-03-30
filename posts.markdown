---
layout: default
title: M.Osawa - Posts
permalink: /posts/
---

<div class="posts-container">
<h1 class="posts-header">Posts</h1>

<div class="posts-description mobile-center">日記や入門的解説などです．<a href="/policies/#disclaimer">免責事項</a></div>

<!-- 記事がもし増えてきたら追加する．
{% for category in site.categories %}
<h2 id="{{ category[0] | slugify }}" class="posts-header">{{ category[0] | capitalize }}</h2>
<ul>
    {% assign posts = category[1] | sort: "date" | reverse %}
    {% for post in posts %}
    <li>
    <a href="{{ post.url }}">{{ post.title }}</a> <time class="date">{{ post.date | date: "(%B %d, %Y)" }}</time>
    </li>
    {% endfor %}
</ul>
{% endfor %} 

<h2 class="posts-header">All posts</h2> 
-->

<ul class="posts">
{% for post in site.posts %}
    <li>
    <a href="{{ post.url }}">{{ post.title }}</a> <time class="date">{{ post.date | date: "%b&thinsp;%d,&thinsp;%y" }}</time>
    </li>
{% endfor %}
</ul>

</div>