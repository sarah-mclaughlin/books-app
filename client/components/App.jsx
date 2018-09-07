import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import {getBooks} from '../actions'
// import Book from './Book'

// import ErrorMessage from './ErrorMessage'
// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
// import WaitIndicator from './WaitIndicator'

import Home from './Home'
import ToRead from './ToRead'
import Reading from './Reading'
import Read from './Read'
// import Book from './Book'
// import AddBook from './AddBook'

class App extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  componentDidMount () {
    this.props.dispatch(getBooks())
  }

  render () {
    return (
      <Router>
        <div className='app'>
          <Route path='/' render={() => {
            return <Home books={this.props.books} />
          }}/>
          <Route exact path='/toread' render={() => {
            return <ToRead books={this.props.toRead} />
          }}/>
          <Route exact path='/reading' render={() => {
            return <Reading books={this.props.reading} />
          }}/>
          <Route exact path='/read' render={() => {
            return <Read books={this.props.read} />
          }}/>
          {/* <Route exact path='/book/:id' component={Book} />
            <Route path='/' component={AddBook} /> */}
        </div>
  
        {/* <div className='app'>
            <ErrorMessage />
            <LoadSubreddit />
            <WaitIndicator />
            <SubredditList />
          </div> */}
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    toRead: state.books.filter(book => {
      return book.status === 'toread'
    }),
    reading: state.books.filter(book => {
      return book.status === 'reading'
    }),
    read: state.books.filter(book => {
      return book.status === 'read'
    })
  }
}

export default connect(mapStateToProps)(App)
