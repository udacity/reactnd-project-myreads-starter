import React from 'react'
import Bookshelf from './Bookshelf'
import Search from './search'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>James Reads</h1>
            </div>
            <Route exact path='/' render={() => (
              <Bookshelf />
            )}/>
            <Route path='/search' render={() => (
              <Search />
            )} />

            <div className="open-search">
              <Link to='/search'> Add a book </Link>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
