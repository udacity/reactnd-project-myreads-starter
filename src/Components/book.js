import React from 'react';
import PropTypes from 'prop-types';

import Information from './information';
import Cover from './cover';
import ShelfChanger from './shelfchanger';
/**
 * @description Represents a book
 *
 */
const Book = ({ handleShelfChange, coverUrl, title, authors, currentShelf = 'none' }) => {
  const handleChange = (event) => {
    console.log('Result: ', event.target.value);
  };
  return (
    <div className="book">
      <div className="book-top">
        <Cover
          url={
            coverUrl ||
            'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
          }
        />
        <ShelfChanger changeShelf={handleShelfChange || handleChange} currShelf={currentShelf} />
      </div>
      <Information
        title={title || 'To Kill a Mockingbird'}
        author={authors || ['Harper Lee', 'More']}
      />
    </div>
  );
};

Book.propTypes = {
  handleShelfChange: PropTypes.func.isRequired,
  coverUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  currentShelf: PropTypes.string,
};

export default Book;
