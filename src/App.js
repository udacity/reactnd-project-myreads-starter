import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './searchPage'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
          <Route path='/search' component={SearchPage}/>
          <Route exact path='/' component={ListBooks}/>
      </div>
    )
  }
}

export default BooksApp
