---
title: EleventyOne
subtitle: A project scaffold for getting building with Eleventy quickly.<br /> Made by <a href="https://twitter.com/philhawksworth">Phil</a> for <a href="https://twitter.com/philhawksworth">Phil</a>, but perhaps you might also find it useful.
layout: layouts/base.njk
---


## RSS Feeds

The pages found in in the posts
<h2> Hawksworx</h2>
<ul class="listing">
{%- for item in hawksworx.entries.slice(0,5) -%}
  <li>{{ item.title }}</li>
{%- endfor -%}
</ul>



<h2>Lean startup</h2>
<ul class="listing">
{%- for item in learnstartup.items.slice(0,5) -%}
  <li>{{ item.title }}</li>
{%- endfor -%}
</ul>

<h2>Netlify</h2>
<ul class="listing">
{%- for item in netlify.items.slice(0,5) -%}
  <li>{{ item.title }}</li>
{%- endfor -%}
</ul>

