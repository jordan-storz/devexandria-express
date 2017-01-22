const request = require('request');
const cheerio = require('cheerio');
const R = require('ramda');

request('http://emberjs.com/blog/2016/09/07/ember-node-lts-support.html', function(error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const $ = cheerio.load(body);
    let description = R.head(Array.from($('meta[property*="description"]'))
      .map(R.prop('attribs'))
      .map(R.prop('content')))
    console.log(description);
  }
});
