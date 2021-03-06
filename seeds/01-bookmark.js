
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookmark').del()
    .then(() => {
      return knex.raw('ALTER SEQUENCE bookmark_id_seq RESTART WITH 3')
    })
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('bookmark').insert({
          id: 1,
          url: 'http://elm-lang.org/blog/blazing-fast-html-round-two',
          domain: 'elm-lang.org',
          language: 'elm',
          title: 'Blazing Fast HTML',
          publish_date: '2016-08-30'
        }),
        knex('bookmark').insert({
          id: 2,
          url: 'http://emberjs.com/blog/2016/12/14/security-incident-aws-s3-key-exposure.html',
          domain: 'emberjs.com',
          language: 'javascript',
          title: 'SECURITY INCIDENT - AWS S3 ACCESS KEY EXPOSURE',
          publish_date: '2016-12-14'
        })
      ]);
    });
};
