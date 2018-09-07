import request from 'superagent'

// const companiesUrl = '/api/v1/companies'

// export function getBooks () {
//   return request.get(`/api/v1/reddit/`)
// }

export function getBook (id) {
  return request.get(`/api/v1/reddit/book/${id}`)
}

export function updateStatus (book) {
  return request.put('/api/v1/reddit')
    .send(book)
}

export function addBook (book) {
  return request.post('/api/v1/reddit')
    .send(book)
}

// export function deleteComment (id) {
//   return request.delete(`${companiesUrl}/${id}`)
// }
