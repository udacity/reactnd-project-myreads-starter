import React from 'react';
import Book from './book.js';

const shelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          <Book/>
        </li>
        <li>
          <Book/>
        </li>
      </ol>
    </div>
  </div>
  )

export default shelf;
