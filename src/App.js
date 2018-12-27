import React from 'react'
import { Route } from 'react-router-dom'
import { getAll, update } from './BooksAPI'
import Main from '../src/pages/Main'
import Search from '../src/pages/Search'
import './App.css'

class BooksApp extends React.Component {
  state = { books: [] }

  componentDidMount() {
    getAll()
      .then(books => this.setState({ books }))
  }

  updateBook = (book, shelf) => {
    update(book, shelf).then(() => {
      getAll()
        .then(books => this.setState({ books }))
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={()=>(
          <Main books={this.state.books} updateBook={this.updateBook} />
        )}/>
        <Route path='/search' render={({ history })=>(
          <Search updateBook={(book, shelf) => {
            this.updateBook(book, shelf)
            history.push('/')
          }} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
