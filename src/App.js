import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import Search from './Search';

class BooksApp extends Component {

  state = {
    books: [],
    searchBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  };

  moveBooks = (book, shelf) => {
    const { books } = this.state;
    BooksAPI.update(book, shelf)
    if (book.shelf === "none") {
      ///books with shelf ="none" comes from search page
      book.shelf = shelf   
      this.setState({ books: [...this.state.books, book] })
      
    } else {
      // books already has a shelf and setting in the MainPage
      const checkID = books.findIndex(b => b.id === book.id)
      if (books[checkID]) {
        books[checkID].shelf = shelf
      };      
      this.setState({books})    
    }     
  };  
  
  searchForBooks =  (value) => {    
    if (value && value.length > 0) {
      BooksAPI.search(value).then(sbooks => {
        if (sbooks && sbooks.length > 0) {
          let searchRes = sbooks;
          searchRes.map(sr => sr.shelf ="none")  //shelf value as defult in the search page          
          this.setState({ searchBooks: searchRes });
        } else {
          this.setState({ searchBooks: [] });
        }       
      })
    } else {
      this.setState({ searchBooks: [] });
    }
  };

  render() {    
    const { books, searchBooks } = this.state;    
    return(
      <div className="app">      
        <Route exact path='/' render={() => (
          <MainPage
            books={books}
            move={this.moveBooks}          
          />)} />
        <Route path = '/search' render= {()=>(          
          <Search
            searchBooks={searchBooks}
            searchForBooks={this.searchForBooks} 
            books={books}
            move={this.moveBooks}  
          />
        )}
        />     
      </div>
    )
  }
};

export default BooksApp;
