import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  updateShelves() {
    BooksAPI.getAll().then( books => {

      this.setState({ shelves: { 
        currentlyReading: books.filter( book => 
          book.shelf === 'currentlyReading'
        ),
        wantToRead: books.filter ( book => 
          book.shelf === 'wantToRead'
        ),
        read: books.filter ( book => 
          book.shelf === 'read'
        )
      }})
    })
  }

  componentDidMount() {
    this.updateShelves()
  }

  render() {
    
    return (
      <div className="app">
        <Route exact path='/' render={() =>
          <ListBooks shelves={this.state.shelves} />
        } />
        <Route path='/search' render={() =>
          <SearchBooks />
        } />
      </div>
    )
  }
}

export default BooksApp
