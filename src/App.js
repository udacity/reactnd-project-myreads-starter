import React from 'react'
import { Route } from 'react-router-dom'
import Books  from './Books'
import Search  from './Search'
import  * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    /*Get all books from BooksAPI  */
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    /*Give an URL for each component  */
    return (
      <div className="app">
        <Route exact path='/' render = {() => (
          <Books
            booksList= {this.state.books}
          />
        )}/>

        <Route exact path='/search' render = {() => (
          <Search/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
