
exports.seed = function(knex, Promise) {
  return knex('author_book').del()
    .then(function () {
      return knex('author_book').insert([
        {books_info: 1, authors_info: 1},
        {books_info: 1, authors_info: 2},
        {books_info: 1, authors_info: 3},
        {books_info: 2, authors_info: 4},
        {books_info: 3, authors_info: 5},
        {books_info: 4, authors_info: 6},
        {books_info: 5, authors_info: 6},
        {books_info: 6, authors_info: 6}
      ]);
    });
};
