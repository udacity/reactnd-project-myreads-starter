import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <Search/>
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
