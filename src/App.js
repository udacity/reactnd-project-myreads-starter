import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import Book from './Book'

class App extends Component {
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    searchBooks: []
  }

  updateBook(bookState, bk) {
    /**let sbooks = this.state.books.filter((book) => book.id === bk.id)
    this.setState( state => {
      books: sbooks 
    } )**/
    this.updateBookState(bk, bookState);
    this.getAll();
  }

  getAll() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateSearch(searchQuery) {
    BooksAPI.search(searchQuery, 10).then((searchBooks) => {
      this.setState({ searchBooks })
    }).catch((e) =>
      this.setState({ searchBooks: [] })
    )
    
  }

  updateBookState(bk, bookState) {
    BooksAPI.update(bk, bookState);
  }

  componentDidMount() {
    this.getAll();
  }

  render() {
    let bookStates = ["currentlyReading", "wantToRead", "read"]
    
    return (
      <div className="app">
          <Route exact path="/" render={() => (

            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                  { bookStates.map((bState) => (
                      <BookShelf key={bState} bookState={bState} books={this.state.books.filter((book) => book.shelf === bState)} onBookUpdate={(bookState, book) => 
                        this.updateBook(bookState, book)
                      } /> 
                  )
                  )}
                </div>
              </div>
              <div className="open-search">
                <Link to="/search" >Add a book</Link>
              </div>
            </div>
       
          )}/>

          <Route path="/search" render={() => (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  {/* 
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                    
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */

                  
                  }
                  <input type="text" placeholder="Search by title or author" onChange={(event) => {
                      this.updateSearch(event.target.value) 
                    }}/>
                  
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {this.state.searchBooks.map((book) => (
                      <li key={book.id} >
                        <Book bookId={book.id} bookTitle={book.title} bookAuthor={book.author} bookUrl={book.imageLinks.thumbnail} bookState="none" onBookStateChange={(bookState) => ( this.updateBook(bookState, book) 
                          ) } 
                        />
                      </li>
                    ))
                  }
                </ol>
              </div>
            </div>
          )} />
      </div>
    )
  }
}

export default App
