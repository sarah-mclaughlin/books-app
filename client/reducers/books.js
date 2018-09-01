const books = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_BOOKS':
      return action.books
    default:
      return state
  }
}

export default books
