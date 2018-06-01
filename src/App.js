import React from 'react'
import { Route } from 'react-router-dom'
import Books  from './Books'
import Search  from './Searching'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={ Books } />
        <Route path='/search' component={ Search } />
      </div>
    )
  }
}

export default BooksApp
