
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bookmark_tag', function(table) {
    table.increments();
    table.integer('bookmark_id');
    table.integer('tag_id');

    table.foreign('bookmark_id')
      .references('id').inTable('bookmark')
      .onDelete('CASCADE');

    table.foreign('tag_id')
      .references('id').inTable('tag')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bookmark_tag');
};
