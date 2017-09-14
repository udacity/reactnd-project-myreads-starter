import React from 'react'
// import * as BooksAPI from './BooksAPI'

import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

import './App.css'
class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route 
          exact 
          path="/" component={ListBooks}/>
        <Route path="/search" component={SearchBooks}/>
      </div>
    );
  }
}

export default BooksApp;
