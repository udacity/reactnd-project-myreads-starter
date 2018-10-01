import React from 'react'
import Book from './book.js'

const bookGrid = (props) => (
  <ol className="books-grid">
    <li>
      <Book/>
    </li>
    <li>
      <Book/>
    </li>
  </ol>
)

export default bookGrid
