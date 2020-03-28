import React from 'react';
import PropTypes from 'prop-types';

import BookShelf from './bookshelf';
import Header from './header';
import SearchButton from './Search/searchbutton';

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
    <SearchButton goBack={() => history.push('/search')} />
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
