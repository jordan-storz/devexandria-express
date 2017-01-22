const express = require('express');
const router = express.Router();

const bookmarksRep = require('../repos/bookmarks');
const strToArray = require('../helpers/str-to-array');

router.get('/', function(req, res, next) {
  if (!req.query.withTags) {
    return next();
  } else {
    let tags = strToArray(req.query.withTags);
    return bookmarksRep.allByFilter(tags).then(bookmarks => {
      return res.json(bookmarks);
    })
  }
});

router.get('/', function(req, res, next) {

  bookmarksRep.allWithTags().then(bookmarks => {
    return res.json(bookmarks);
  });
});

router.get('/:id', function(req, res, next) {
  bookmarksRep.oneWithTags(req.params.id).then(bookmark => {
    return res.json(bookmark);
  });
});

router.post('/', function (req, res, next) {
});

router.put('/:id', function(req, res, next) {
  res.json({msg: 'given bookmark to be updated.'});
});

router.delete('/:id', function(req, res, next) {
  res.json({msg: 'given bookmark to be deleted'});
});

module.exports = router;
