import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import ListBooks from './ListBooks';
import SearchBook from './SearchBook';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

componentDidMount() {
  // Get data from the database
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  });
}

onShelfChange = (selectedBook, shelf) => {
  if(selectedBook.shelf !== shelf){
    // update the BooksAPI so that the data persists after refreshing the page
    BooksAPI.update(selectedBook, shelf).then(() => {
       // Update the book shelf
      selectedBook.shelf = shelf;
      // Check if the changed book already exists in the state
      let oldBooks = this.state.books.filter(book => book.id !== selectedBook.id)
      // if the book is new then add it in the state
      this.setState( (currentState) => ({
        books: oldBooks.concat(selectedBook)
      }));
    });
  }
}

  render() {
    return (
      <div className="app">
       <Route path="/search" render={({history}) => (
          <SearchBook 
        books={this.state.books}
      onShelfChange={(book, shelf) => {
          this.onShelfChange(book, shelf)
          history.push('/')}}/>
    )}/>
       <Route path="/" exact render={() => (
          <ListBooks 
            books={this.state.books}
      onShelfChange={this.onShelfChange}/>
    )}/>
      </div>
    )
  }
}

export default BooksApp
