import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf_today from './Bookshelf_today'
import Bookshelf_tomorrow from './Bookshelf_tomorrow'
import Bookshelf_yesterday from './Bookshelf_yesterday'

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false
  }
componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState({ books })
      })
    }



    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */


  render() {
    return (
    <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                      <Bookshelf_today />
                </div>


                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                      <Bookshelf_tomorrow />
               </div>


                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                      <Bookshelf_yesterday />
                </div>


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
