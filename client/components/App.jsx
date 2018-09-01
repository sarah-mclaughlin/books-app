import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// import ErrorMessage from './ErrorMessage'
// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
// import WaitIndicator from './WaitIndicator'

import Home from './Home'
import ToRead from './ToRead'
import Reading from './Reading'
import Read from './Read'
import Book from './Book'
import AddBook from './AddBook'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route path='/' component={Home} />
        <Route exact path='/toread' component={ToRead} />
        <Route exact path='/reading' component={Reading} />
        <Route exact path='/read' component={Read} />
        <Route exact path='/book/:id' component={Book} />
        <Route path='/' component={AddBook} />
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

export default App
