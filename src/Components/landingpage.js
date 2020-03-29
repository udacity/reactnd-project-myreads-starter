import React from 'react';
import PropTypes from 'prop-types';

import BookShelf from './bookshelf';
import Header from './header';
import SearchButton from './Search/searchbutton';
/**
 * @description Main Page of the App. Lists all BookShelfs with current Books and Option to navigate to Searchbar
 * @param  {} currentlyReading Books in the "Currently Reading" shelf
 * @param  {} wantToRead Books in the "Want to Read" shelf
 * @param  {} read Books in the "Read" shelf
 * @param  {} history History Prop from React Router for Navigation
 * @param  {} handleShelfChange - Function which handles Shelf Changing
 */
const LandingPage = ({ currentlyReading, wantToRead, read, history, handleShelfChange }) => (
  <div className="list-books">
    <Header />
    <BookShelf
      title="Currently Reading"
      books={currentlyReading}
      handleShelfChange={handleShelfChange}
    />
    <BookShelf title="Want to Read" books={wantToRead} handleShelfChange={handleShelfChange} />
    <BookShelf title="Read" books={read} handleShelfChange={handleShelfChange} />
    <SearchButton openSearch={() => history.push('/search')} />
  </div>
);

LandingPage.propTypes = {
  currentlyReading: PropTypes.arrayOf(PropTypes.object).isRequired,
  wantToRead: PropTypes.arrayOf(PropTypes.object).isRequired,
  read: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.any.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
};

export default LandingPage;
