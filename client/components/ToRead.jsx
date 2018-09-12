import React from 'react'
import {connect} from 'react-redux'

import {updateStatus} from '../apiClient'

import {getBooks} from '../actions'

// import Book from './Book'

class ToRead extends React.Component {
  constructor (props) {
    super(props)
    // this.state = {
    //   id: '',
    //   status: ''
    // }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (id) {
    const book = {
      id: id,
      status: 'reading'
    }
    updateStatus(book)
      .then(() => {
        this.props.dispatch(getBooks())
      })
  }

  render () {
    return (
      <div>
        <h3>To read</h3>
        <ul>
          {this.props.toRead.map(book => {
            return <div key={book.id}>
              <li>{book.title}</li>
              {/* <button id={id} onClick={(e) => this.handleClick(id, e)} >I am reading</button> */}

              <button onClick={() => this.handleClick(book.id)} >I am reading</button>
              {/* <Book book={book} /> */}
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
    toRead: state.books.filter(book => {
      return book.status === 'toread'
    })
    // reading: state.books.filter(book => {
    //   return book.status === 'reading'
    // }),
    // read: state.books.filter(book => {
    //   return book.status === 'read'
    // })
  }
}

export default connect(mapStateToProps)(ToRead)
