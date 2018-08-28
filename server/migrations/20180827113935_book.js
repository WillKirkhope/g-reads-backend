
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', book => {
    book.increments()
    book.string('title')
    book.string('genre')
    book.text('description')
    book.string('cover_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
};
