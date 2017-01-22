
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tag', function(table) {
    table.increments();
    table.string('name');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.raw('DROP TABLE IF EXISTS tag CASCADE');
};
