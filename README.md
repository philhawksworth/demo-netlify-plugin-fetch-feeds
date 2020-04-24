# Demo Netlify Plugin: Fetch Feed

Experimenting with the plugin architecture to fetch RSS data for any SSG to use in its templates.

Example site: https://demo-plugin-fetch-feed.netlify.com

This demonstrates use of the following Netlify Plugins:

- [netlify-plugin-fetch-feeds](https://github.com/philhawksworth/netlify-plugin-fetch-feeds)
- netlify-plugin-yield-data-for-eleventy (yet to be packaged and published)

## Usage

Instructions for running a version of this demo site for yourself.

```bash

# clone the repo
git clone https://github.com/philhawksworth/demo-netlify-plugin-fetch-feed.git

# move into working directory and install dependencies
cd demo-netlify-plugin-fetch-feed
npm install

# ensure that you have the netlify build command available
# (in future this will be provided via the CLI)
npm install @netlify/build -g

# run the build as netlify would with the build bot
netlify-build
```

You can inspect the output in `/dist` or use the static site generator utilities to serve the site

```
npx eleventy --serve
```

## Defining the RSS feeds

Make more RSS feeds available to the SSG by defining them in the netlify.yml file

```toml
# Config for the Netlify Build Plugin: netlify-plugin-fetch-feeds
[[plugins]]
  package = "netlify-plugin-fetch-feeds"

  [plugins.inputs]
    # Where should data files reside
    dataDir = "src/_data"

    # All the feeds we wish to gather for use in the build
    [[plugins.inputs.feeds]]
      name = "hawksworx"
      url = "https://hawksworx.com/feed.json"
      ttl = 10
    [[plugins.inputs.feeds]]
      name = "netlify"
      url = "https://www.netlify.com/blog/index.xml"
      ttl = 86400

```

