const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getBooks (conn = connection) {
  return conn('books')
    .select()
}

function getBookById (id, conn = connection) {
  return conn('books')
    .where('id', '=', id)
    .select()
}

// shouldn't need this function
function getBooksByStatus (status, conn = connection) {
  return conn('books')
    .where('status', '=', status)
    .select()
}

function updateStatus (book, conn = connection) {
  return conn('books')
    .where('id', '=', book.id)
    .update({
      status: book.status
    })
}

function addBook (book, conn = connection) {
  return conn('books')
    .insert({
      'title': book.title,
      'author': book.author,
      'image': book.image,
      'status': 'toread'
    })
}

// function deleteComment (id, conn = connection) {
//   return conn('comments')
//     .where('id', id)
//     .del()
// }

module.exports = {
  getBooks,
  getBookById,
  getBooksByStatus,
  updateStatus,
  addBook
}
