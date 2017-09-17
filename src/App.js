import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  shelves = [
    {
      key: "currentlyReading",
      title: "Currently Reading"
    },
    {
      key: "wantToRead",
      title: "Want to Read"
    },
    {
      key: "read",
      title: "Read"
    }
  ]

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <BookList
              shelves={ this.shelves }
              books={ this.state.books }
              title={ "MyReads by @helioricardo" }
            />
          )}
        />
        <Route
          path="/add"
          render={() => (
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
                  */}
                  <input type="text" placeholder="Search by title or author"/>
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
