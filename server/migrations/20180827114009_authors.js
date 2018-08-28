
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', authors => {
    authors.increments()
    authors.string('author_firstname')
    authors.string('author_lastname')
    authors.text('author_biography')
    authors.string('author_portraiturl')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')
};
