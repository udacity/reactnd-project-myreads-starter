import React from 'react'
import AddBookButton from './AddBookButton'
import Bookshelf from './Bookshelf'

const BookList = props => {
  const shelves = ["currentlyReading", "wantToRead", "read"]
  const {books, onShelfChange} = props

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => <Bookshelf key={shelf} shelf={shelf} books={books} onShelfChange={onShelfChange}/>)}
        </div>
      </div>
      <AddBookButton/>
    </div>
    )
  }

export default BookList