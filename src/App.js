import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'


class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  updateShelf(book, shelf) {
    let { books } = this.state
    books = books.filter(b => book.title !== b.title).concat({
      ...book,
      shelf: shelf
    })
    this.setState({ books })
    BooksAPI.update(book, shelf)
  }


	updateQuery = (query) => {
		this.setState({ query })
		query === "" ? this.setState({ searchBooks: [] }) : 
			BooksAPI.search(query).then((searchBooks) => {
				this.setState({ searchBooks: searchBooks })
			})
}

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={({ history }) => (
          <ListBooks
            books={this.state.books}
            onUpdateShelf={(book, shelf) => {
              this.updateShelf(book, shelf)
            }}
          />
        )}
        />
        <Route exact path='/search' render={() => (
          <SearchBooks
            onUpdateShelfOnSearch={(book, shelf) => {
              this.updateShelf(book, shelf)
            }}
            query={this.state.query}
            books={this.state.books}
            searchBooks={this.state.searchBooks}
            updateQuery={this.updateQuery}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
