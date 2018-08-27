
exports.seed = function(knex, Promise) {
  return knex('author_book').del()
    .then(function () {
      return knex('author_book').insert([
        {booksInfo: 1, authorsInfo: 1},
        {booksInfo: 1, authorsInfo: 2},
        {booksInfo: 1, authorsInfo: 3},
        {booksInfo: 2, authorsInfo: 4},
        {booksInfo: 3, authorsInfo: 5},
        {booksInfo: 4, authorsInfo: 6},
        {booksInfo: 5, authorsInfo: 6},
        {booksInfo: 6, authorsInfo: 6}
      ]);
    });
};
