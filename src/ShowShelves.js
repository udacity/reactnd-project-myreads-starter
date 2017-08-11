import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CurrentlyReadingShelf from './CurrentlyReadingShelf'
import WantToReadShelf from './WantToReadShelf'
import ReadShelf from './ReadShelf'

class ShowShelves extends Component {
  state = {
    shelf: []
  }

  render() {
    const { books } = this.props
    const currentlyReadingBooks = books.filter((book) => (book.shelf === 'currentlyReading'))
    const wantToReadBooks = books.filter((book) => (book.shelf === 'wantToRead'))
    const readBooks = books.filter((book) => (book.shelf === 'read'))
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <CurrentlyReadingShelf books={currentlyReadingBooks} />
            <WantToReadShelf books={wantToReadBooks} />
            <ReadShelf books={readBooks} />
          </div>
        </div>
        <div className="open-search">
          <Link
            to='/add'
            onClick={this.props.onNavigate}>
          </Link>
        </div>
      </div>
    )
  }
}

export default ShowShelves
