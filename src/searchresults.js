import React from 'react'
import Book from './book.js'

const searchResults = (props) => (
    <div className="search-books-results">
      <ol className="books-grid">
        <Book/>
      </ol>
    </div>
  )

export default searchResults
