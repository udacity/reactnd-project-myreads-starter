import React from 'react'
import './App.css'
import BookShelf from './bookshelf.js'
import OpenSearch from './opensearch.js'
import { Route } from 'react-router-dom'
import SearchPage from './searchpage.js'


class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchPage/>
          )}/>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookShelf/>
            <OpenSearch/>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
