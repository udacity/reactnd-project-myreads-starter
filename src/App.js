import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      })
    })
  }

  render() {
    return (
   <p>Hello hellllllllloooooo. YEAH YEAH YEAH</p>
    )
  }
}

export default BooksApp
