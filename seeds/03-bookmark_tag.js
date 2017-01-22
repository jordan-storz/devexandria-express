
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookmark_tag').del()
    .then(() => {
      return knex.raw('ALTER SEQUENCE bookmark_tag_id_seq RESTART WITH 7')
    })
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('bookmark_tag').insert({
          id: 1,
          bookmark_id: 1,
          tag_id: 3
        }),
        knex('bookmark_tag').insert({
          id: 2,
          bookmark_id: 1,
          tag_id: 29
        }),
        knex('bookmark_tag').insert({
          id: 3,
          bookmark_id: 1,
          tag_id: 34
        }),
        knex('bookmark_tag').insert({
          id: 4,
          bookmark_id: 2,
          tag_id: 1
        }),
        knex('bookmark_tag').insert({
          id: 5,
          bookmark_id: 2,
          tag_id: 4
        }),
        knex('bookmark_tag').insert({
          id: 6,
          bookmark_id: 2,
          tag_id: 25
        }),
      ]);
    });
};
