const axios = require('axios');
const fs    = require('fs');


function netlifyPlugin(conf) {

  // make this convenient to access in various places.
  var PLUGIN_CACHE_DIR;

  // Use temporary methods for this until implemented
  var tempUtils = {

    cache : {

      // Save the data with an optional expiry date
      save: (props) => {
        const data = {
          'expires': props.ttl ? props.ttl : null,
          'content': props.content
        };
        // write our cache file
        fs.writeFile(`${PLUGIN_CACHE_DIR}/${props.file}`, JSON.stringify(data), err => {
          if(err) {
            console.log(err);
          } else {
            console.log(`Data saved for dev: ${props.file}`);
          }
        });
      },

      // Return the data held in a fiven cache file
      get: (props) => {
        console.log('cache.get:', props);
      },

      // Check if a cached file has exceeded its ttl or if it is still valid
      check: (props) => {
        console.log('cache.check:', props);
      }
    }

  };


  function getFeed(name, url, ttl) {

    console.log(`Fetching ${name} feed from ${url} with a tll of ${ttl}`);

    // TODO: if exists in cache and within ttl, return from cache

    // otherwise fetch data and save with a ttl
    axios.get(url)
      .then(response => {
        // console.log('tempCache :', tempCache.save);
        // console.log('response.data :', JSON.stringify(response.data));
        tempUtils.cache.save({
          'file': `${name}.json`,
          'content': JSON.stringify(response.data),
          'ttl': ttl
        });
      })
      .catch(err => {
        console.log('Error fetching feed:', url);
      });
  }



  return {

    init: (data) => {
      // set up our caaching location
      PLUGIN_CACHE_DIR = `${data.constants.CACHE_DIR}/rss-plugin-data`;
      if (!fs.existsSync(PLUGIN_CACHE_DIR)){
        fs.mkdirSync(PLUGIN_CACHE_DIR, {recursive: true})
      };
    },

    // Hook into lifecycle
    prebuild: (data) => {

      // console.log('CONSTANTS :', data);

      conf.feeds.forEach(feed => {
        var tll = feed.ttl ? feed.ttl : null;
        getFeed(feed.name, feed.url, tll);
      });

    }
    // build: () => {
    //   console.log('build');
    // },
    // finally: () => {
    //   console.log('finally');
    // },
  };
};

module.exports = netlifyPlugin;
