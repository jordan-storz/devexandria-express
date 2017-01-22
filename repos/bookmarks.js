const R = require('ramda');
const BookmarkDB = require('../models/bookmark');
const TagDB = require('../models/tag');
const serializeBookmarkArray = require('../serializers/bookmark-array');
const serializeBookmarkSingle = require('../serializers/bookmark-single');
const serializeTagArray = require('../serializers/tag-array');

module.exports = {
  allWithTags: function(){
    return BookmarkDB.findAll().then(bookmarks => {
      return R.pipe(
        serializeBookmarkArray,
        this.sideloadTags
      )(bookmarks);
    });
  },
  oneWithTags: function(id) {
    return BookmarkDB.findOne(id).then(bookmarks => {
      return R.pipe(
        serializeBookmarkArray,
        this.sideloadTags
      )(bookmarks).then(R.head);
    })
  },
  allByFilter: function(tagNames) {
    return TagDB.findByNames(tagNames).then(tags => {
      let tagIds = R.pluck('id', tags);
      return BookmarkDB.findByTagIds(tagIds).then(bookmarks => {
        return serializeBookmarkArray(bookmarks);
      })
    });
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
