import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList';
import SearchBook from './components/SearchBook';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then( fetchedData => {
      this.setState({books: fetchedData})
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then( result => {
      if(result.hasOwnProperty(shelf) && result[shelf].includes(book.id)) {
        this.setState({shelf: shelf}) // update books
      } else {
        this.setState({shelf: 'none'})
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' 
        component={() => 
        <SearchBook 
          updateShelf={this.updateShelf}
          books={this.state.books}
          />
        }/>

        <Route exact 
        path='/' 
        component={() => 
        <BookList
          books={this.state.books}
          updateShelf={this.updateShelf}
          />
        }/>
      </div>
    )
  }
}

export default BooksApp
