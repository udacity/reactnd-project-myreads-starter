import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })

  }

  updateBook = (book, shelf) => {
    
    book.shelf = shelf
    var results = this.state.books.filter(currentbook => currentbook.id !== book.id);
    results.push(book)


  this.setState({ books: results  })

BooksAPI.update(book, shelf)

}
 

  render() {
    return (
       <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            onUpdateBook={this.updateBook}
            books={this.state.books}

           />
        )}/>

        <Route exact path='/search' render={() => (
          <SearchBooks
          onUpdateBook={this.updateBook}
          workingBooks={this.state.books}
           />
          
        )}/>
    
      </div>
      )
  }
}

export default BooksApp
