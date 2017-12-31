import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BooksGrid from './BooksGrid'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    query: '',
    searchedBooks: [],
    shelfs: {}
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      this.setBookShelfsState(this.state.books)
    })
  }

  setBookShelfsState(books) {
    var currentShelfs = {}
    books.forEach((book) => {
      currentShelfs[book.id] = book.shelf
    })

    this.setState({ shelfs: currentShelfs })
  }

  updateShelf(book, shelfs){
    shelfs[book.id] = book.shelf
    return shelfs
  }

  selectBookShelf = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter((b) => b.id !== book.id).concat([book]),
      shelfs: this.updateShelf(book, state.shelfs)
    }))

    BooksAPI.update(book, shelf)
  }

  addShelf(book){
    if(this.state.shelfs[book.id]){
      book.shelf = this.state.shelfs[book.id]
    }
    return book
  }
  
  searchQuery = (query) => {
    if(query){
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] })
        } else{
          this.setState({ searchedBooks: searchedBooks.map((book) => this.addShelf(book)) })
        }
      })
    } else {
      this.setState({ searchedBooks: [] })
    }
    this.setState({ query: query.trim() })
  }


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event) => this.searchQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <BooksGrid
                books={this.state.searchedBooks}
                onUpdateBookShelf={this.selectBookShelf}
              />
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  title={"Currently Reading"}
                  shelf={"currentlyReading"}
                  books={this.state.books}
                  onUpdateBookShelf={this.selectBookShelf}
                />
                <BookShelf
                  title={"Want to Read"}
                  shelf={"wantToRead"}
                  books={this.state.books}
                  onUpdateBookShelf={this.selectBookShelf}
                />
                <BookShelf
                  title={"Read"}
                  shelf={"read"}
                  books={this.state.books}
                  onUpdateBookShelf={this.selectBookShelf}
                />
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
