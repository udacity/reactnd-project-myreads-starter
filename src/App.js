import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import Bookshelf from './Bookshelf'
import {Route, BrowserRouter, Link} from 'react-router-dom'

const shelves = ["currentlyReading", "wantToRead", "read"]

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {shelves.map((shelf) => <Bookshelf key={shelf} shelf={shelf} books={this.state.books}/>)}
                </div>
              </div>
              <Link className="open-search" to='/search'><button>Add a book</button></Link>
            </div>
          )}/>
          <Route path='/search' render={() => (
            <SearchBooks/>
          )}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
