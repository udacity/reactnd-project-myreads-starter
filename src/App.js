import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './style/App.css'
import BookList from './view/BookList';
import SearchBook from './view/SearchBook';

class BooksApp extends React.Component {
  //TODO: MR-01 É pra componentizar as coisas, criar rotas também
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() =>
          (
            <BookList />
          )}
        />
        <Route exact path='/search' render={() =>
          (
            <SearchBook />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
