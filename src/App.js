import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import ListBooks from './ListBooks.js'
import Book from './Book.js'

class BooksApp extends React.Component {
  state = {
     books: [],
     queryBooks: [],
     searchParam: ""
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({books: books}))
  }

  changeShelf = (b, shelf) => {
    this.setState((prevState) => {
      let ind = prevState.books.findIndex(book => book.id === b.id)
      prevState.books[ind].shelf = shelf
      return prevState
    })

    BooksAPI.update(b, shelf)
  }
  changeShelfInQuery = (b, shelf) => {
    this.setState((prevState) => {
      let ind = prevState.queryBooks.findIndex(book => book.id === b.id)
      prevState.queryBooks[ind].shelf = shelf
      return prevState
    })

    this.setState((prevState) => {
      let ind = prevState.books.findIndex(book => book.id === b.id)
      if(ind !== -1)
        prevState.books[ind].shelf = shelf
      else
      {
        b.shelf = shelf
        prevState.books.push(b)
      }
      return prevState
    })

    

    BooksAPI.update(b, shelf)
  }

  search = (e) => {
    const sParam = e.target.value
    this.setState({searchParam: sParam})

    if(sParam.trim() === "")
    {
      this.setState({queryBooks: []})
      return
    }

    BooksAPI.search(sParam).then(books => {
      if(!books || books.error)
      {
        this.setState({queryBooks: []})
        return
      }

      books = books.map((b) => {
        const bookTest = this.state.books.find(x => x.id === b.id)
        if(bookTest)
          b.shelf = bookTest.shelf
        else
          b.shelf = "none"

        return b
      })


      this.setState({queryBooks: books})
    })
  }

  render() {
    return (
    <BrowserRouter>
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => history.push("/")}>Close</button>
              <div className="search-books-input-wrapper">
                <input onChange={this.search} value={this.state.searchParam} type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.queryBooks.map((b) => (
                  <li key={b.id}>
                    <Book changeShelf={this.changeShelfInQuery} book={b} />
                  </li>)
                )}
              </ol>
            </div>
          </div>)} 
        />
        <Route exact path="/" render={({ history }) => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <ListBooks changeShelf={this.changeShelf} books={this.state.books.filter((b) => b.shelf === "currentlyReading")} shelf="Currently Reading" />
                <ListBooks changeShelf={this.changeShelf} books={this.state.books.filter((b) => b.shelf === "wantToRead")} shelf="Want to Read" />
                <ListBooks changeShelf={this.changeShelf} books={this.state.books.filter((b) => b.shelf === "read")} shelf="Read" />
              </div>
            </div>
            
            <div className="open-search">
              <button onClick={() => history.push("/search")}>Add a book</button>
            </div>
          </div>)} 
        />
      </div>
    </BrowserRouter>
    )
  }
}

export default BooksApp
