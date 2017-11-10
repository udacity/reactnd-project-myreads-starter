import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import If from './If';

class BooksApp extends React.Component {
  state = {
    query: '',
    showSearchPage: false,
    books: [],
    queryBooks: []
  }

  /*get all the books currently in
   any bookshelf*/
  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  //Search for the books when input is given
  searchForBooks = (evt) => {
    const query = evt.target.value;
    this.setState({query});

    BooksAPI.search(query,20).then(
      (queryBooks) => {
        queryBooks.map(qbook => {
          qbook.shelf = 'none';
          for(const book of this.state.books){
            if(qbook.id === book.id){
              qbook.shelf = book.shelf;
              break;
            }
          }
          return qbook;
        });
        this.setState({ queryBooks });
      }
    )
  }

  /*Refresh the books on search after moving
  a book to a different shelf*/
  refreshSearchPageContent = (id,newShelf) => {
    this.setState(function() {
      let shelfBook = this.state.books.find(b => b.id === id);
      let queryBook = this.state.queryBooks.find(b => b.id === id);

      if(shelfBook) shelfBook.shelf = newShelf;
      if(queryBook) queryBook.shelf = newShelf;
    })
  }

  /*Update the content of the bookshelf
  after a books moving betwen bookshelfs */
  refreshBookshelfs = (id,newShelf) => {
    this.setState(function(){
      for(let book of this.state.books){
        if(book.id === id) book.shelf = newShelf;
      }
    })

  }

  componentDidMount = () => {
    this.getBooks();
  }

  render() {
    const books = this.state.books;
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link
                to="/"
                className="close-search" onClick={() => {
                  this.setState({ showSearchPage: false});
                  this.getBooks();
                }}>Close</Link>
              <div className="search-books-input-wrapper">
                <input
                  value={this.state.query}
                  type="text"
                  placeholder="Search by title or author"
                  onChange={this.searchForBooks}
                />
              </div>
            </div>
            <div className="search-books-results">
              <Bookshelf
                books={this.state.queryBooks}
                updateBooksInShelf={this.refreshSearchPageContent}
              />
            </div>
          </div>
        )}/>


        <Route exact path="/" render={() => (
          <If test={books && books.length > 0}
            main={
              <div className='shelfs'>
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <Bookshelf
                  title="Currently Reading"
                  shelf="currentlyReading"
                  books={books.filter(book=>book.shelf === 'currentlyReading')}
                  updateBooksInShelf={this.refreshBookshelfs}
                />

                <Bookshelf
                  title="Want to Read"
                  shelf="wantToRead"
                  books={books.filter(book=>book.shelf === 'wantToRead')}
                  updateBooksInShelf={this.refreshBookshelfs}
                />
                <Bookshelf
                  title="Read"
                  shelf='read'
                  books={books.filter(book=>book.shelf === 'read')}
                  updateBooksInShelf={this.refreshBookshelfs}/>

                <div className="open-search">
                  <Link
                    to="/search"
                    onClick={() =>
                      this.setState({ showSearchPage: true, query: '',queryBooks:[] })}
                  >Add a book</Link>
                </div>
              </div>
            }
            secondary={
              <div className='loading'>Loading...</div>
            }
          />
        )}/>
      </div>
  )}
}

export default BooksApp
