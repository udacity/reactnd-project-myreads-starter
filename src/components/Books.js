import React from 'react';
import PropTypes from 'prop-types';
import BooksOnShelfOptions from './BooksOnShelfOptions';
import noBgImage from '../../src/imgs/no-image.png';

const Books = props => {
  const { book, books, switchShelfOption } = props;

  const getBackgroundImage = () => {
    if(book.imageLinks && book.imageLinks.thumbnail){
      return book.imageLinks.thumbnail;
    } else {
      return noBgImage;
    }
  }

  const title = book.title 
                ? book.title 
                : 'No Title found';

  const authors = book.authors 
                  ? book.authors 
                  : 'No Author(s) found'

  return (
    <li>
      <div className="book">
        <div className="book-top">
        <div className="book-cover" 
            style={{ width: 128, height: 193, backgroundImage: `url("${getBackgroundImage()}")` }}></div>
          <BooksOnShelfOptions book={book} books={books} switchShelfOption={switchShelfOption} />
        </div>
        <div className="book-title">{title}</div>
        <div className='book-authors'>{authors}</div>
      </div>
    </li>
  );
};

Books.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  switchShelfOption: PropTypes.func.isRequired
};

export default Books;
