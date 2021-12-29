import React, { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'


const sampleReading = [
  {
    title: "To Kill a Mockingbird",
    authors: "Harper Lee",
    coverUrl: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
  },
  {
    title: "Ender's Game",
    authors: "Orson Scott Card",
    coverUrl: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
  }
]

const sampleWant = [
  {
    title: "1776",
    authors: "David McCullough",
    coverUrl: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    authors: "J.K. Rowling",
    coverUrl: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
  }
]


class SearchPage extends Component {
  state = { booksFound: [], query: "", allBooks: [] }

  getBooks(query) {
    this.setState(
      {
        booksFound: query == "" ? [] : this.state.allBooks.filter(
          (b) => {
            return b.title.toLowerCase().includes(query.toLowerCase()) || b.authors[0].toLowerCase().includes(query.toLowerCase().trimStart())
          }
        ),
        query: query.trimStart(),
      }
    );
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ allBooks: books }));
  }

  render() {
    const { query } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/"><button className="close-search">Close</button></Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={(event) => this.getBooks(event.target.value)} placeholder="Search by title or author" value={query} />
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
              return <li><Book title={book.title} authors={book.authors} cover={book.coverUrl} /></li>
            })}
          </ol>
        </div>
      </div>
    )
  }
}


class BooksPage extends Component {
  state = { reading: sampleReading, wantRead: sampleWant, read: sampleWant }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div >
          <div className="list-books-content">
            <div>
              <BookShelf title="Currently Reading" bookList={this.state.reading} />
              <BookShelf title="Want to Read" bookList={this.state.wantRead} />
              <BookShelf title="Read" bookList={this.state.read} />
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
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<BooksPage />} />
        <Route exact path="/search" element={<SearchPage />} />
      </Routes>
    )
  }
}

export default BooksApp
