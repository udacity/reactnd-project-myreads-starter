import React from 'react';
import PropTypes from 'prop-types';

import Information from './information';
import Cover from './cover';
import ShelfChanger from './shelfchanger';
/**
 * @description Represents a book
 *
 */
const Book = ({ handleBookShelfChange, coverUrl, title, authors, currentShelf }) => {
  const handleChange = (event) => {
    console.log('Result: ', event.target.value);
  };
  return (
    <div className="book">
      <div className="book-top">
        <Cover
          url={
            coverUrl
              ? coverUrl
              : 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
          }
        />
        <ShelfChanger
          changeShelf={handleBookShelfChange ? handleBookShelfChange : handleChange}
          currShelf={currentShelf}
        />
      </div>
      <Information
        title={title ? title : 'To Kill a Mockingbird'}
        author={authors ? authors : ['Harper Lee', 'More']}
      />
    </div>
  );
};

Book.propTypes = {
  handleBookShelfChange: PropTypes.func,
  coverUrl: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
