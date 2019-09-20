# Test RSS Plugin

Experimenting with the plugin architecture to pull in RSS data for any SSG to use in its templates.

## Usage

```bash

# clone the repo
git clone https://github.com/philhawksworth/test-build.git

# move into working directory and install dependencies
cd test-build
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

MAke more RSS feeds available to the SSG by defining them in the netlify.yml file

```yaml

- ./plugins/rss-data-fetch:
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
