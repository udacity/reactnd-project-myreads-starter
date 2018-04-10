import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'

class SearchPage extends React.Component {
    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
}

export default SearchPage;