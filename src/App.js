import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import AddToBookList from './AddToBookList'
import BookWrapper from './BookWrapper'
import './App.css'

class BooksApp extends React.Component {
  /**
   * TODO: Create controlled select box on Book component
   */
  
  state = {
    books: [],
  };

  updateShelf = (book,shelf) => {
    BooksAPI.get(book).then((bookObj) => {
      bookObj.shelf = shelf;
      const books = this.state.books.filter(a => a.id !== book).concat(bookObj);

      BooksAPI.update(bookObj,shelf).then((bookStatus) => {
        this.setState({books})
      })
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookWrapper 
            myBooks={this.state.books}
            updateShelf={this.updateShelf}
          />
        )}/>

        <Route exact path="/search" render={() => (
          <AddToBookList
            myBooks={this.state.books}
            updateShelf={this.updateShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
