import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList';
import SearchBook from './components/SearchBook';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path='/search' component={SearchBook} />
        <Route exact path='/' component={BookList} />
      </div>
    )
  }
}

export default BooksApp
