import React from 'react';
import PropTypes from 'prop-types';

import Information from './information';
import Cover from './cover';
import ShelfChanger from './shelfchanger';
/**
 * @description Represents a book
 *
 */
const Book = ({ handleShelfChange, coverUrl, title, authors, currentShelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <Cover
          url={
            coverUrl ||
            'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
          }
        />
        <ShelfChanger changeShelf={handleShelfChange} currShelf={currentShelf} />
      </div>
      <Information title={title} author={authors} />
    </div>
  );
};

Book.defaultProps = {
  currentShelf: 'none',
  authors: '',
  title: '',
};

Book.propTypes = {
  handleShelfChange: PropTypes.func.isRequired,
  coverUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  authors: PropTypes.string,
  currentShelf: PropTypes.string,
};

export default Book;
