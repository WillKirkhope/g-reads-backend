
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', authors => {
    authors.increments()
    authors.string('Author First Name')
    authors.string('Author Last Name')
    authors.string('Author Biography')
    authors.string('Author Portrait Url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors')
};
