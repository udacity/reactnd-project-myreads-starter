import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './App.css';

function Bookshelf(props) {
  const { title, books, emptyMessage } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            {books.map((book) => (<Book data={book}/>))}
            {books.length ? null : emptyMessage}
          </li>
        </ol>
      </div>
    </div>
  )
}

Bookshelf.defaultProps = {
  emptyMessage: 'No books in this shelf :('
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  emptyMessage: PropTypes.string
}

export default Bookshelf;
