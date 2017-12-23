import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const BookSection = ({
  title,
  books,
  bookShelfUpdate
}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ title }</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book
              bookId={book.id}
              title={book.title}
              status={book.shelf}
              imagens={book.imageLinks}
              authors={book.authors}
              bookShelfUpdate={bookShelfUpdate}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
  )

BookSection.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  bookShelfUpdate: PropTypes.func.isRequired
}

BookSection.defaultProps = {
  title: '',
  books: [],
  bookShelfUpdate: () => {}
}

export default BookSection;
