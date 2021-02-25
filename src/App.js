import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import HomePage from './HomePage';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }
//"shelf": "currentlyReading"
  /*onUpdateBookStatus = (book, status) => {
    this.setState((prevState) => (
      {
        books
      }
    ))
  }*/

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Route path ='/search' render = {() => (
            <SearchBooks 
              books = {this.state.books}
              onUpdateBookStatus = {this.onUpdateBookStatus}
            />
          )} />
          <Route exact path = '/' render = {() => (
            <HomePage 
            books = {this.state.books}
            />
          )} />
      
            
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
        </div>
        
      </div>
    )
  }
}

export default BooksApp
