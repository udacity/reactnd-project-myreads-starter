import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Main'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books:[]
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
        //console.log(books);
        this.setState(() => ({
            books
        }))
    })
  }

  updateShelf = (book, shelf) => {  

    BooksAPI.update(book, shelf)
    .then((result) => {
      //update frontend once book is updated from API
      book.shelf = shelf
      this.setState((currentState) => ({
        books: currentState.books.filter((x) => {
          return x.id !== book.id
        }).concat([book])
      }))

    })
  }
  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path='/' render={() => (
            <Main
              books={this.state.books}
              onUpdateShelf={this.updateShelf}
              /*
              onDeleteContact={this.removeContact}
              */
            />
          )} />
          <Route path='/search' render={() => (
            <Search
              books={this.state.books}
              onUpdateShelf={this.updateShelf}
              /*
              onCreateContact={(contact) => {
                this.createContact(contact)
                history.push('/')
              }}
              */
            />
          )} />
        </div>
      </Router>
      </div>
    )
  }
}

export default BooksApp
