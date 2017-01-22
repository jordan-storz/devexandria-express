const R = require('ramda');
const BookmarkDB = require('../models/bookmark');
const TagDB = require('../models/tag');
const serializeBookmarkArray = require('../serializers/bookmark-array');
const serializeBookmarkSingle = require('../serializers/bookmark-single');
const serializeTagArray = require('../serializers/tag-array');

module.exports = {
  bookmarksWithTags: () => {
    return BookmarkDB.findAll().then(bookmarks => {
      console.log('found bookmarks:');
      console.log(bookmarks);
      return Promise.all(bookmarks.map(bookmark => {
        return TagDB.findByBookmark(bookmark.id)
          .then(tags => {
            let tagData = serializeTagArray(tags)
            return R.assoc('tags', tagData, bookmark);
          });
      }));
    });
  }
}
