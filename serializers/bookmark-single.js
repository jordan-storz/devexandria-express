const serializeBookmarkArray = require('./bookmark-array');

module.exports = (function(R) {
  return (arr) => R.head(serializeBookmarkArray(arr));
})(require('ramda'));
