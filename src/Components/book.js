import React from 'react';
import PropTypes from 'prop-types';

import Information from './information';
import Cover from './cover';
import ShelfChanger from './shelfchanger';
/**
 * @description Represents a book
 *
 * @param  {} handleShelfChange - Function which handles Shelf Changing
 * @param  {} coverUrl Url of the Cover
 * @param  {} title Title of the Book
 * @param  {} authors Array of Authors of the Book
 * @param  {} currentShelf Current Shelf of the Book
 * @param  {} id Book ID
 */
const Book = ({ handleShelfChange, coverUrl, title, authors, currentShelf, id }) => {
  return (
    <div className="book">
      <div className="book-top">
        <Cover
          url={
            coverUrl ||
            'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
          }
        />
        <ShelfChanger changeShelf={handleShelfChange} currShelf={currentShelf} id={id} />
      </div>
      <Information title={title} author={authors} />
    </div>
  );
};

Book.defaultProps = {
  currentShelf: 'none',
  authors: '',
  title: '',
  coverUrl: '',
};

Book.propTypes = {
  handleShelfChange: PropTypes.func.isRequired,
  coverUrl: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string).isRequired, PropTypes.string]),
  currentShelf: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default Book;
