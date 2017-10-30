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
    
  this.setState((state) => {
      const results = this.state.books.filter(currentbook => currentbook.id === book.id);
      results[0].shelf = shelf
  }
    )

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
           />
        )}/>
    
      </div>
      )
  }
}

export default BooksApp
