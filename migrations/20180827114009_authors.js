
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', authors => {
    authors.increments()
    authors.string('first_name')
    authors.string('last_name')
    authors.text('biography')
    authors.string('portrait_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')
};
