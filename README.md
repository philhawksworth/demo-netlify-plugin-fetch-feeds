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

```yaml
- netlify-plugin-fetch-feeds:
    # Make the content from these feeds available to templates
    # in our SSG via a collection with a given name
    feeds:
      # - name: used as a key for our data collection
      #   url: where to find this resource, in xml or json format
      #   ttl: don't fetch this again if cached less than this many seconds ago
      - name: netlify
        url: https://www.netlify.com/blog/index.xml
        ttl: 3600
      - name: hawksworx
        url: https://hawksworx.com/feed.json
        ttl: 180
```

## Known issues

- Async operations in one Netlify Build life-cycle event are not guaranteed to have completed before the next event fires. Fetching RSS needs to handle this.
- Intra-build cache is not yet exposed as a utility API so an internal equivalent has been implemented temporarily. The TTL definitions are honored locally, but do not take effect when run in prod by the build bot.
