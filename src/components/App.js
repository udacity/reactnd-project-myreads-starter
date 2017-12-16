import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import '../App.css'
import ListOfBooks from './ListOfBooks';
import AddBook from './AddBook';


class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          component={ListOfBooks}
        />

        <Route
          path="/add"
          component={AddBook}
        />
      </div>
    )
  }
}

export default BooksApp
