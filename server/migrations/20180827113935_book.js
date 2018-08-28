
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', book => {
    book.increments()
    book.string('book_title')
    book.string('book_genre')
    book.text('book_description')
    book.string('book_coverurl')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
};
