import React from 'react'
import { Route, Link } from 'react-router-dom';
import '../App.css'
import ListOfBooks from './ListOfBooks';
import AddBook from './AddBook';
import { getAll } from '../BooksAPI'

const BooksApp = () =>
  (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => <ListOfBooks getAll={getAll} Link={Link} />}
      />

      <Route
        path="/add"
        component={AddBook}
      />
    </div>
  )

export default BooksApp
