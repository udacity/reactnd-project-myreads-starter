import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  updateBookData(books) {
    this.setState({ books })
    console.log(books)
  }


  componentDidMount() {
    BooksAPI.getAll().then((result) => this.updateBookData(result))
  }
  render() {
    const currentReadingBooks = this.state.books.filter((book) => {
      return book.shelf === 'currentlyReading';
    });
    const wantToReadBooks = this.state.books.filter((book) => {
      return book.shelf === 'wantToRead';
    });
    const readBooks = this.state.books.filter((book) => {
      return book.shelf === 'read';
    });
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf shelfName="Currently Reading" books={currentReadingBooks}/>
                <Bookshelf shelfName="Want to read" books={wantToReadBooks}/>
                <Bookshelf shelfName="Read" books={readBooks}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }

}

export default BooksApp
