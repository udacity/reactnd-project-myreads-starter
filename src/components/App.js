import React from 'react'
import { Route } from 'react-router-dom';
import '../App.css'
import ListOfBooks from './ListOfBooks';
import AddBook from './AddBook';

const BooksApp = () =>
  (
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

export default BooksApp
