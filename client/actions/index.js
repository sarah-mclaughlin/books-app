import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const getBooks = () => {
  return (dispatch) => {
    // dispatch(requestPosts())
    request.get(`/api/v1/reddit`)
      .then(res => {
        dispatch(showBooks(res.body.books))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const addBook = (book) => {
  return (dispatch) => {
    request.post(`/api/v1/reddit`)
      .send({book})
      .then(res => {
        dispatch(getBooks())
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const updateStatus = (book) => {
  return (dispatch) => {
    request.put(`/api/v1/reddit`)
      .send({book})
      .then(res => {
        dispatch(getBooks())
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const showBooks = (books) => {
  return {
    type: 'SHOW_BOOKS',
    books
    // books: books.map(book => {
    //   return book
    // })
  }
}

// export const getBooksByStatus = (status) => {
//   return {
//     type: 'SHOW_BOOKS_By_STATUS',
//     status
//   }
// }

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
