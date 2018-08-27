
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author_book', author_book => {
   table.integer('booksInfo').references('books.id').onDelete('cascade')
   table.integer('authorsInfo').references('authors.id').onDelete('cascade')
   table.primary(['booksInfo', 'authorsInfo'])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author_book')
};
