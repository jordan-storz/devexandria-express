const knex = require('../db/connection');

module.exports = {
  findOne: (id) => {
    return knex('bookmark').where('id', id);
  },
  findAll: () => {
    return knex('bookmark');
  },
  create: (infoObj) => {
    return knex('bookmark').insert(infoObj);
  },
  update: (id, infoObj) => {
    return knex('bookmark').where('id', id)
      .update(infoObj);
  },
  delete: (id) => {
    return knex('bookmark').where('id', id).del();
  },
  findByTagIds: (tagIds) => {
    return knex('bookmark')
      .join('bookmark_tag', 'bookmark_tag.bookmark_id', 'bookmark.id')
      .join('tag', 'bookmark_tag.tag_id', 'tag.id')
      .whereIn('tag.id', tagIds);
  }
}
