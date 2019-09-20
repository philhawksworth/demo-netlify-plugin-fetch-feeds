---
title: EleventyOne
subtitle: A project scaffold for getting building with Eleventy quickly.<br /> Made by <a href="https://twitter.com/philhawksworth">Phil</a> for <a href="https://twitter.com/philhawksworth">Phil</a>, but perhaps you might also find it useful.
layout: layouts/base.njk
---


## RSS Feeds

<h2> Hawksworx</h2>
<ul class="listing">
{%- for item in hawksworx.entries.slice(0,5) -%}
  <li><a href="{{ item.link }}">{{ item.title }}</a></li>
{%- endfor -%}
</ul>


<h2>Netlify</h2>
<ul class="listing">
{%- for item in netlify.items.slice(0,5) -%}
  <li><a href="{{ item.link }}">{{ item.title }}</a></li>
{%- endfor -%}
</ul>


<h2>DWells</h2>
<ul class="listing">
{%- for item in dwells.items.slice(0,5) -%}
  <li><a href="{{ item.link }}">{{ item.title }}</a></li>
{%- endfor -%}
</ul>
