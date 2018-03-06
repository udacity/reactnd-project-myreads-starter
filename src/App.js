import React from 'react'
import { Route, Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/search/SearchBooks'
import BooksShelf from './components/shelf/BooksShelf'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  changeShelf = (newBook, filteredBook) => {
      BooksAPI.update(newBook, filteredBook).then(response =>{    
      newBook.shelf=filteredBook;
      const updatedBooks=this.state.books.filter( book => book.id !== newBook.id );
      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks });
    }) 
  }
  
  render() {
    return (
      <div className="app">
        <Route path="/search" render={( { history }) => (
          <SearchBooks 
            books={this.state.books}
            changeShelf={ this.changeShelf }
          />
        )} />
          <Route  exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
              <BooksShelf
                books={this.state.books }
                changeShelf={ this.changeShelf }
              />
          </div>
        )} />
        <div className="open-search">
          <Link to="/search">Search</Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
