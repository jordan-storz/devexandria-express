const express = require('express');
const router = express.Router();

const Tag = require('../models/tag');
const serializeTagArray = require('../serializers/tag-array');

router.get('/', function(req, res, next) {
  Tag.findAll().then(result => {
    res.json({
      data: serializeTagArray(result)
    });
  });
});

router.get('/:id', function(req, res, next) {
  Tag.findOne(req.params.id).then(result => {
    res.json({
      data: serializeTagSingle(result)
    });
  });
});

router.post('/', function (req, res, next) {
  res.json({msg: 'bookmark to be created'});
});

router.put('/:id', function(req, res, next) {
  res.json({msg: 'given bookmark to be updated.'});
});

router.delete('/:id', function(req, res, next) {
  res.json({msg: 'given bookmark to be deleted'});
});

module.exports = router;
