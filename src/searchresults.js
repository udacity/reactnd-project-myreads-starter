import React from 'react'
import BookGrid from './bookgrid.js'

const searchResults = (props) => (
    <div className="search-books-results">
      <BookGrid books={props.booksFound} handleSelection={props.handleSelection}/>
    </div>
  )

export default searchResults
