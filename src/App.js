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

// TODO: Allow for moving books between shelves
// TODO: Show correct shelf as default selection
const Book = ({ book }) => (
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
          <select>
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
);

class Shelf extends React.Component {
  render() {
    const { name, books } = this.props;
    return (
      <div className="bookshelf">
          <h2 className="bookshelf-title">{name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.length > 0 && books.map((book) => <Book key={book.id} book={book} />)}
            </ol>
          </div>
        </div>
    )
  }
}

// TODO: Use React Router for navigation
// TODO: Write callback for moving books between shelves
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

  getBooksOnShelf = (shelf) => this.state.books.filter((book) => book.shelf === shelf);

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
                  <Shelf name='Currently Reading' books = {this.getBooksOnShelf('currentlyReading')} />
                  <Shelf name='Want To Read' books = {this.getBooksOnShelf('wantToRead')} />
                  <Shelf name='Read' books = {this.getBooksOnShelf('read')} />
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