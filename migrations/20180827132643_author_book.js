
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author_book', author_book => {
   author_book.integer('books_info').references('book.id').onDelete('cascade')
   author_book.integer('authors_info').references('authors.id').onDelete('cascade')
   author_book.primary(['books_info', 'authors_info'])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author_book')
};
