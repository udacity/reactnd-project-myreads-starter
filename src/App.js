import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import Search from './Search';
import BookList from './BookList';
import './App.css';

class BooksApp extends React.Component {
  state = {
    currReadingBooks: [],
    wantToReadBooks: [],
    readBooks: [],
  }
  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      const currReadingBooks = books.filter((book)=>(book.shelf === 'currentlyReading'));
      const wantToReadBooks = books.filter((book)=>(book.shelf === 'wantToRead'));
      const readBooks = books.filter((book)=>(book.shelf === 'read'));
      this.setState(()=>({
        currReadingBooks,
        wantToReadBooks,
        readBooks,
      }));

    })
  }
  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (<Search />)}/>
        <Route exact path='/' render={() => (<BookList 
          currReadingBooks={this.state.currReadingBooks} 
          wantToReadBooks={this.state.wantToReadBooks}
          readBooks={this.state.readBooks}
        />)}/>
      </div>
    )
  }
}

export default BooksApp;
