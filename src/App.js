import React from 'react'
import './App.css'
import Main from '../src/pages/Main'
import Search from '../src/pages/Search'
import { getAll, update } from './BooksAPI'


class BooksApp extends React.Component {
  state = { showSearchPage: false }

  updateBook = (book, shelf) => {
    update(book, shelf).then(() => {
      getAll()
        .then(books => this.setState({ books }))
    })
  }

  render() {
    return (
      <Main updateBook={this.updateBook} />
      // <Search updateBook={this.updateBook} />
    )
  }
}

export default BooksApp
