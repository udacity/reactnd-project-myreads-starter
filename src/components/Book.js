import React from 'react';
import BookChanger from './BookChanger';
import PropTypes from 'prop-types';

const Book = ({
  bookId,
  title,
  imagens,
  status,
  authors
}) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${imagens.thumbnail})`
        }}>
      </div>
      <BookChanger
        bookId={bookId}
        status={status}
      />
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">
      {authors.map(author => (
        <span key={ author }>
          { author }
        </span>
      ))}
    </div>
  </div>
  )


Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagens: PropTypes.object.isRequired,
  status: PropTypes.string,
  authors: PropTypes.array
}

Book.defaultProps = {
  bookId: '',
  title: '',
  imagens: {},
  authors: [],
}

export default Book;
