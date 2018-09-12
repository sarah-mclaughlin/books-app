import React from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// import {getBooks} from '../actions'
// import Book from './Book'

class Home extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  // componentDidMount () {
  //   this.props.dispatch(getBooks())
  // }

  // path (path) {
  //   this.props.history.push(path)
  // }

  render () {
    return (
      <div className='home'>
        <h1>My Books</h1>
        {/* <button onClick={() => this.path('/toread')}>To Read</button>
        <button onClick={() => this.path('/reading')}>Reading</button>
        <button onClick={() => this.path('/read')}>Read</button> */}
        <Link to='/toread'>To Read</Link><br></br>
        <Link to='/reading'>Reading</Link><br></br>
        <Link to='/read'>Read</Link><br></br>
        <ul>
          {this.props.books.map(book => {
            return <li key={book.id}>{book.title}</li>
          })}
        </ul>
        {/* <Book key={book.id} {...book}/> */}
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     books: state.books
//     // toRead: state.books.filter(book => {
//     //   return book.status === 'toread'
//     // }),
//     // reading: state.books.filter(book => {
//     //   return book.status === 'reading'
//     // }),
//     // read: state.books.filter(book => {
//     //   return book.status === 'read'
//     // })
//   }
// }

// export default connect(mapStateToProps)(Home)

export default Home
