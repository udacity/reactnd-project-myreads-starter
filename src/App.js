import React from 'react'
import Route from 'react-router-dom/Route'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import BooksSearch from './BooksSearch'

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
          component={BooksSearch}
        />
      </div>
    )
  }
}

export default BooksApp
