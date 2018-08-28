const database = require("./database-connection")

module.exports = {
    listBooks(){
      return database('book')
        .select('book.cover_url', 'book.title', 'authors.first_name', 'authors.last_name', 'book.genre', 'book.description')
        .from('book')
        .innerJoin('author_book', 'book.id', 'author_book.books_info')
        .innerJoin('authors', 'authors.id', 'author_book.authors_info')
    },
    listAuthors(){
      return database('authors').select('authors.portrait_url', 'authors.first_name', 'authors.last_name', 'authors.biography', 'book.title')
        .from('authors')
        .fullOuterJoin('author_book', 'authors.id', 'author_book.authors_info')
        .fullOuterJoin('book', 'book.id', 'author_book.books_info')
    },
    read(tableName, id) {
      return database(tableName).select().where('id', id)
    },
    post(tableName, newForm) {
      return database(tableName)
        .insert(newForm)
        .returning('*')
        .then(record => record[0])
    },
    update(tableName, id, newForm) {
      return database(tableName)
        .update(newForm)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    deleteOne(tableName, id) {
      return database(tableName)
        .delete()
        .where('id', id)
    }
}
