const express = require('express');
const router = express.Router();


const Bookmark = require('../models/bookmark');
const serializeBookmarkArray = require('../serializers/bookmark-array');
const serializeBookmarkSingle = require('../serializers/bookmark-single');

router.get('/', function(req, res, next) {
  Bookmark.findAll().then(result => {
    res.json(
      serializeBookmarkArray(result)
    )
  });
});

router.get('/:id', function(req, res, next) {
  Bookmark.findOne(req.params.id).then(result => {
    res.json(
      serializeBookmarkSingle(result)
    );
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
