import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Searchbooks from './Searchbooks'
import Listbooks from './Listbooks'

class BooksApp extends React.Component {
  state = {
    books:[
    ]
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books
      }))
    })
  }

  moveBookTo = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter(everyBook => everyBook.id !== book.id).concat([book])
    }))
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <Listbooks books={this.state.books} moveBookTo={this.moveBookTo}/>
      )}/>
      <Route exact path='/search' render={() => (
      <Searchbooks books={this.state.books } moveBookTo={this.moveBookTo}/>
      )}/>
      </div>
    )
  }
}

export default BooksApp
