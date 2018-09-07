import React from 'react'
import {connect} from 'react-redux'

// import Book from './Book'

class Read extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div>
        <h3>Read</h3>
        { this.props.read
          ? <ul>
            {this.props.read.map(book => {
              return <li key={book.id}>{book.title}</li>
            })}
          </ul>
          : <h4>You have not read any books</h4>
        }
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
    // reading: state.books.filter(book => {
    //   return book.status === 'reading'
    // })
    read: state.books.filter(book => {
      return book.status === 'read'
    })
  }
}

export default connect(mapStateToProps)(Read)
