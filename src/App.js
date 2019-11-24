import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import './BookCard.css'
import BookCard from './BookCard.js'
import Header from './Header'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    bookcover: ''
  }


  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState((currentState) => ({
          book: ''          
        }))
      })
  }

  render() {
    return (
      <div className="app">
      <Header />
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="field">
                <div className="control">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" placeholder="Search by title or author" className="book-search-input input is-primary is-rounded is-medium" />
                </div>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
            <div className="list-books-content">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <BookCard />                      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                                          
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
             
                    </ol>
                  </div>
                </div>
              <div className="open-search">
                <button className="button is-dark is-bold is-rounded" onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>     
            </div>  
        )}      
      
      </div>      
    )
  }
}

export default BooksApp
