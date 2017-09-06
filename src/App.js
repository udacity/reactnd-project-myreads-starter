import React from 'react'
import Bookshelf from './Bookshelf'
import Search from './search'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      //console.log('got books', books)
    })
  }

  updateCategory = (book, category) => {
    console.log(book, category)
    let books=this.state.books;
    if (books.includes(book)){
      let shelfMove=this.state.books.findIndex((b) => b.id === book.id);
      books[shelfMove].shelf = category
      let newBook = books[shelfMove]
      books.splice(shelfMove, 1)
      books.push(newBook)
      this.setState({
        books: books
      })
      BooksAPI.update(newBook, category)
    } else {
      book.shelf = category
      books.push(book)
      BooksAPI.update(book, category)
    }
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>James Reads</h1>
            </div>
            <Route exact path='/' render={() => (
              <Bookshelf update={this.updateCategory} books={this.state.books} />
            )}/>
            <Route path='/search' render={() => (
              <Search update={this.updateCategory}/>
            )} />

            <div className="open-search">
              <Link to='/search'> Add a book </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
