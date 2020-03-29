import React from 'react';
import PropTypes from 'prop-types';
import GoBackButton from './gobackbutton';
import BooksGrid from '../booksgrid';

const Search = ({ goHome, query, setQuery, queryResult, handleShelfChange, stateShelves }) => {
  return (
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
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BooksGrid
          books={queryResult}
          handleShelfChange={handleShelfChange}
          booksInShelve={stateShelves}
        />
      </div>
    </div>
  );
};

Search.defaultProps = {
  stateShelves: [],
  query: '',
};

Search.propTypes = {
  goHome: PropTypes.func.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
  stateShelves: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
  queryResult: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Search;
