const tagNames = [
  'ember', 'angular', 'functional', 'object-oriented', 'react',
  'rxjs', 'bookmark', 'atom', 'galvanize', 'gulp', 'mac', 'filestreams',
  'windows', 'linux', 'methods', 'conference', 'processors', 'ruby on rails',
  'express', 'node', 'drones', 'AI', 'robotics', 'JVM', 'keyboards', 'wifi',
  'http', 'vue', 'elm', 'security', 'observables', 'monads', 'functors',
  'error-handling'
]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tag').del()
    .then(() => {
      return knex.raw('ALTER SEQUENCE tag_id_seq RESTART WITH 34')
    })
    .then(function () {
      return Promise.all(tagNames.map((tagName, index) => {
        return knex('tag')
          .insert({
            id: index + 1,
            name: tagName
          });
      }));
    });
};
