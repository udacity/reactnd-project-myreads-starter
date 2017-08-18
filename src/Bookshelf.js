import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './App.css';

function Bookshelf(props) {
  const { title, books, onUpdate } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book {...book} onUpdate={props.onUpdate} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Bookshelf;
