const R = require('ramda');
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
  }
}
