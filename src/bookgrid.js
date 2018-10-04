import React from 'react'
import Book from './book.js'

const bookGrid = (props) => (
  <ol className="books-grid">
    {props.books.map(book =>
    <li key={book.id}>
      <Book bookInfo={book} handleSelection={props.handleSelection}/>
    </li>)
    }
  </ol>
)

export default bookGrid
