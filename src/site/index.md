---
title: RSS plugin
subtitle: Get data from RSS feeds so that our static sited generator can use it in its templates.
layout: layouts/base.njk
---

Entries from RSS feeds are available to use in the static site generator which generated this site thanks to the Netlify plugin which sources them. Once sourced, they can be used in the temapltes via a collections.

Adding more RSS feeds to include in template is as simple as adding to <a href="{{ pkg.repository.url }}blob/master/netlify.yml">the netlify.yml config.</a>

Code available in the <a href="{{ pkg.repository.url }}">Git Repo</a>.

<h2>Netlify blog</h2>
<ul class="listing">
{%- for item in netlify.items.slice(0,4) -%}
  <li><a href="{{ item.link }}">{{ item.title }}</a></li>
{%- endfor -%}
</ul>

<h2>Netlify on Medium</h2>
<ul class="listing">
{%- for item in medium.items.slice(0,4) -%}
  <li><a href="{{ item.link }}">{{ item.title }}</a></li>
{%- endfor -%}
</ul>


<h2>Hawksworx</h2>
<ul class="listing">
{%- for item in hawksworx.entries.slice(0,4) -%}
  <li><a href="{{ item.link }}">{{ item.title }}</a></li>
{%- endfor -%}
</ul>


<h2>Mr DWells</h2>
<ul class="listing">
{%- for item in dwells.items.slice(0,4) -%}
  <li><a href="{{ item.link }}">{{ item.title }}</a></li>
{%- endfor -%}
</ul>
