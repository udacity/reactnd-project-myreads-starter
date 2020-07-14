import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
// TODO: Move all components into their own files

// TODO: Build functioning search
// TODO: Use React Router to navigate back to home page
class SearchBooks extends React.Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

          </ol>
        </div>
      </div>
    )
  }
}

class Book extends React.Component {
  handleShelfChange = (e) => {
    const { onShelfChange, book } = this.props;
    console.log(e.target.value);
    onShelfChange(book, e.target.value);
  };

  render() {
    const { book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})` }}
            ></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={this.handleShelfChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

class Shelf extends React.Component {
  render() {
    const { name, books, onShelfChange } = this.props;
    return (
      <div className="bookshelf">
          <h2 className="bookshelf-title">{name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.length > 0 && books.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  onShelfChange={onShelfChange}
                />
              ))}
            </ol>
          </div>
        </div>
    )
  }
}

// TODO: Use React Router for navigation
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: {}
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  getBooksOnShelf = (shelf) => {
    const filteredArray = this.state.books.filter((book) => book.shelf === shelf);
    const sortedArray = [...filteredArray].sort((a, b) => a.title > b.title ? 1 : -1);
    return sortedArray
  };

  handleShelfChange = (book, newShelf) => {
    book.shelf = newShelf;
    console.log()
    this.setState((prevState) => (
      {
        books: [
          ...prevState.books.filter((b) => b.id !== book.id),
          book
        ]
      }
    ));
    BooksAPI.update(book, newShelf);
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage
          ? <SearchBooks />
          : this.state.books.length > 0 &&
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf
                    name='Currently Reading'
                    books = {this.getBooksOnShelf('currentlyReading')}
                    onShelfChange = {this.handleShelfChange}
                  />
                  <Shelf
                    name='Want To Read'
                    books = {this.getBooksOnShelf('wantToRead')}
                    onShelfChange = {this.handleShelfChange}
                  />
                  <Shelf
                    name='Read'
                    books = {this.getBooksOnShelf('read')}
                    onShelfChange = {this.handleShelfChange}
                  />
                </div>
              </div>
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
            </div>
        }
      </div>
    )
  }
}

export default BooksApp