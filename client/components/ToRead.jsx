import React from 'react'
import {connect} from 'react-redux'

import Book from './Book'

class ToRead extends React.Component {
  // constructor (props) {
  //   super(props)
  //   // this.state = {
  //   //   id: '',
  //   //   status: ''
  //   // }
  //   // this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick (e) {
  //   e.preventDefault()
  //   this.setState({
  //     id: e.currentTarget.id,
  //     status: 'reading'
  //   })
  // }

  render () {
    return (
      <div>
        <h3>To read</h3>
        <ul>
          {this.props.toRead.map(book => {
            return (
              <div key={book.id}>
                <Book book={book} />
              </div>
            )
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
