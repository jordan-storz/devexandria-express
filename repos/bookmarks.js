const R = require('ramda');
const BookmarkDB = require('../models/bookmark');
const TagDB = require('../models/tag');
const serializeBookmarkArray = require('../serializers/bookmark-array');
const serializeBookmarkSingle = require('../serializers/bookmark-single');
const serializeTagArray = require('../serializers/tag-array');

module.exports = {
  allWithTags: function(){
    return BookmarkDB.findAll().then(bookmarks => {
      return this.sideloadTags(bookmarks);
    });
  },
  oneWithTags: function(id) {
    console.log(id);
    console.log(id);
    return BookmarkDB.findOne(id).then(bookmarks => {
      return this.sideloadTags(bookmarks).then(R.head);
    })
  },
  sideloadTags: function(bookmarks) {
    return Promise.all(bookmarks.map(bookmark => {
      return TagDB.findByBookmark(bookmark.id)
        .then(tags => {
          let tagData = serializeTagArray(tags)
          let tagObj = R.assoc('data', tagData, {});
          return R.assoc('tags', tagObj, bookmark);
        });
    }));
  }
}
