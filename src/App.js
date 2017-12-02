import React from 'react'
import SearchBook from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './api/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = { }

  render() {
    return (
      <div className="app">
        <Route path="/" exact component={ListBooks} />
        <Route path="/search" component={SearchBook} />
      </div>
    )
  }
}

export default BooksApp
