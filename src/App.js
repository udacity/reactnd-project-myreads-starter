import React, { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { DebounceInput } from 'react-debounce-input';
import * as BooksAPI from './BooksAPI'
import './App.css'


class SearchPage extends Component {
  state = { booksFound: [], query: "", allBooks: [] }

  getBooks(query) {
    if (query != "") {
      return BooksAPI.search(query).then(books => this.setState({ booksFound: books, query: query.trimStart() }))
    }
    return this.setState({ query: query.trimStart(), booksFound: [] })
  }

  render() {
    const { query } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/"><button className="close-search">Close</button></Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              type="text"
              minLength={0}
              debounceTimeout={300}
              onChange={(event) => this.getBooks(event.target.value)}
              placeholder="Search by title or author"
              value={query} />
          </div>
        </div>
        <div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.booksFound.length > 0
                ? this.state.booksFound.map(b => <li><Book title={b.title} authors={b.authors} cover={b.imageLinks.thumbnail} /></li>)
                : <div></div>
            }
          </ol>
        </div>
      </div>
    )
  }
}

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.cover})` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    )
  }
}


class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.bookList.map((book) => {
              return <li><Book title={book.title} authors={book.authors} cover={book.imageLinks.thumbnail} /></li>
            })}
          </ol>
        </div>
      </div>
    )
  }
}


class BooksPage extends Component {

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div >
          <div className="list-books-content">
            <div>
              <BookShelf title="Currently Reading" bookList={this.props.reading} />
              <BookShelf title="Want to Read" bookList={this.props.wantRead} />
              <BookShelf title="Read" bookList={this.props.read} />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search"><button>Add a book</button></Link>
          </div>
        </div >
        )
      </div>
    )
  }
}



class BooksApp extends Component {
  state = { currentlyReading: [], wantToRead: [], read: [] }

  componentDidMount() {
    BooksAPI.getAll().then(
      books => this.setState(
        (_) => {
          return {
            currentlyReading: books.filter(b => b.shelf == "currentlyReading"),
            wantToRead: books.filter(b => b.shelf == "wantToRead"),
            read: books.filter(b => b.shelf == "read"),
          }
        }
      )
    )
  }

  addReading(book) {
    return
  }

  addWantRead(book) {
    return
  }

  addRead(book) {
    return
  }


  render() {
    const {currentlyReading, wantToRead, read} = this.state;
    return (
      <Routes>
        <Route exact path="/" element={
          <BooksPage reading={currentlyReading} wantRead={wantToRead} read={read} />
        } />
        <Route exact path="/search" element={<SearchPage />} />
      </Routes>
    )
  }
}

export default BooksApp
