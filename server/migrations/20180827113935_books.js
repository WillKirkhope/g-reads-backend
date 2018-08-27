
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', books => {
    books.increments()
    books.string('Book Title')
    books.string('Book Genre')
    books.string('Book Description')
    books.string('Book Cover Url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
