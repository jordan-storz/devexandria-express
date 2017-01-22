const express = require('express');
const router = express.Router();

const bookmarksRep = require('../repos/bookmarks');
const bookmarkdb = require('../models/bookmark');

router.get('/', function(req, res, next) {
  
  bookmarksRep.bookmarksWithTags().then(bookmarks => {
    return res.json(bookmarks);
  });
});

router.get('/:id', function(req, res, next) {
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
