
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', books => {
    books.increments()
    books.string('BookTitle')
    books.string('BookGenre')
    books.string('BookDescription')
    books.string('BookCoverUrl')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
