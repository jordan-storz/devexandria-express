
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bookmark', function(table) {
    table.increments();
    table.string('url');
    table.string('domain');
    table.string('language');
    table.string('tags');
    table.text('title');
    table.date('publish_date');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.raw('DROP TABLE IF EXISTS bookmark CASCADE');
};
