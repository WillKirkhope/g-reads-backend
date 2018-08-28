const database = require("./database-connection")

module.exports = {
    listBooks(){
      return database('book')
        .select('book.cover_url', 'book.title', 'author.first_name', 'author.last_name', 'book.genre', 'book.description')
        .from('book')
        .innerJoin('author_book', 'book.id', 'author_book.book_id')
        .innerJoin('author', 'author.id', 'author_book.author_id')
    },
    listAuthors(){
      return database('author').select('author.pic_url', 'author.first_name', 'author.last_name', 'author.bio', 'book.title')
        .from('author')
        .fullOuterJoin('author_book', 'author.id', 'author_book.author_id')
        .fullOuterJoin('book', 'book.id', 'author_book.book_id')
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
