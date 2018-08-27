
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', authors => {
    authors.increments()
    authors.string('AuthorFirstName')
    authors.string('AuthorLastName')
    authors.string('AuthorBiography')
    authors.string('AuthorPortraitUrl')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')
};
