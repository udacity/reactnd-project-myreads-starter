import React from 'react';
import PropTypes from 'prop-types';
import GoBackButton from './gobackbutton';

const Search = ({ goHome, currentlyReading, wantToRead, read }) => (
  <div className="search-books">
    <div className="search-books-bar">
      <GoBackButton goBack={goHome} />
      <div className="search-books-input-wrapper">
        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
        <input type="text" placeholder="Search by title or author" />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid" />
    </div>
  </div>
);

Search.propTypes = {
  goHome: PropTypes.func.isRequired,
  currentlyReading: PropTypes.arrayOf(PropTypes.object).isRequired,
  wantToRead: PropTypes.arrayOf(PropTypes.object).isRequired,
  read: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Search;
