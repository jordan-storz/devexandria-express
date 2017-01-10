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
  }
}
