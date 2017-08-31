import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import HomePage from './components/home/HomePage'
import SearchPage from './components/search/SearchPage'

// import * as BooksAPI from './BooksAPI'
import './App.css'



class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/search" component={SearchPage}/>
        </div>
      </Router>
    )
  }
}

export default BooksApp
