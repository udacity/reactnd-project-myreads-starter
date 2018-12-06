import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

  // Share the same books between your main page and search page.
  // componentDidMount() {
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({books})
  //   })
  // }
  //
  // state = {
  //   books: []
  // }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={Search}/>
        <Route exact path="/" component={ListBooks}/>
      </div>
    )
  }
}

export default BooksApp
