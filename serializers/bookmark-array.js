const transformBookmark = require('./helpers/transform-bookmark');

module.exports = (function(R) {

  const dissId = R.dissoc('id');

  const addAttrs = obj => R.assoc('attributes', dissId(obj), obj);
  const isoAttrs = obj => R.pick(['attributes'], addAttrs(obj));

  const pickId = R.pick(['id']);

  const addType = R.assoc('type', 'bookmark');

  const transform = obj => R.merge(isoAttrs(obj), pickId(obj));

  const serialize = R.map(transformBookmark);

  return serialize;

})(require('ramda'));
