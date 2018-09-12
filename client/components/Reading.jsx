import React from 'react'
import {connect} from 'react-redux'

import {updateStatus} from '../apiClient'

import {getBooks} from '../actions'

// import Book from './Book'

class Reading extends React.Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (id) {
    const book = {
      id: id,
      status: 'read'
    }
    updateStatus(book)
      .then(() => {
        this.props.dispatch(getBooks())
      })
  }

  render () {
    return (
      <div>
        <h3>Reading</h3>
        <ul>
          {this.props.reading.map(book => {
            return <div key={book.id}>
              <li>{book.title}</li>
              <button onClick={() => this.handleClick(book.id)} >I have read</button>
            </div>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // books: state.books
    // toRead: state.books.filter(book => {
    //   return book.status === 'toread'
    // })
    reading: state.books.filter(book => {
      return book.status === 'reading'
    })
    // read: state.books.filter(book => {
    //   return book.status === 'read'
    // })
  }
}

export default connect(mapStateToProps)(Reading)
