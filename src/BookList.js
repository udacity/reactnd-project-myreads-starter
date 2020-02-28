import React from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'
import AddBookButton from './AddBookButton'

const BookList = props => {
  const shelves = ['currentlyReading', 'wantToRead', 'read']
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

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BookList