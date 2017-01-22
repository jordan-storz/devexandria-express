const R = require('ramda');
const knex = require('../db/connection');

module.exports = {
  findOne: (id) => {
    return knex('tag').where('id', id);
  },
  findAll: () => {
    return knex('tag');
  },
  create: (infoObj) => {
    return knex('tag').insert(infoObj);
  },
  update: (id, infoObj) => {
    return knex('tag').where('id', id)
      .update(infoObj);
  },
  delete: (id) => {
    return knex('tag').where('id', id).del();
  },
  findByBookmark: (bookmarkId) => {
    return knex('tag')
      .join('bookmark_tag', 'tag.id', 'bookmark_tag.tag_id')
      .where('bookmark_tag.bookmark_id', bookmarkId);
  }
}
