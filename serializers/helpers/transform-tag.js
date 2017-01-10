module.exports = (function(R) {

  const dissId = R.dissoc('id');

  const addAttrs = obj => R.assoc('attributes', dissId(obj), obj);
  const isoAttrs = obj => R.pick(['attributes'], addAttrs(obj));

  const pickId = R.pick(['id']);
  const addType = R.assoc('type', 'tag');


  const transform = obj => addType(R.merge(isoAttrs(obj), pickId(obj)));

  return transform;

})(require('ramda'));
