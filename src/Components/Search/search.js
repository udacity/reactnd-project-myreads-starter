import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './searchbar';
import BooksGrid from '../booksgrid';
/**
 * @description Search Component with Inputbar to trigger Query and Grid to display resulting Books
 * @param  {} {goHome  Function triggering router to go back to index page
 * @param  {} query Actual Query String
 * @param  {} setQuery Sets Query String
 * @param  {} queryResult Array Containing Query Results
 * @param  {} handleShelfChange Function which handles Shelf Changing
 * @param  {} booksInShelve} Array Containing all Books which correspondending Shelf Attribute is not null or 'none'
 */
const Search = ({ goHome, query, setQuery, queryResult, handleShelfChange, booksInShelve }) => {
  if (query.length === 0) {
    // eslint-disable-next-line no-param-reassign
    queryResult = [];
  }
  return (
    <div className="search-books">
      <SearchBar goHome={goHome} query={query} setQuery={setQuery} />
      <div className="search-books-results">
        <BooksGrid
          books={queryResult}
          handleShelfChange={handleShelfChange}
          booksInShelve={booksInShelve}
        />
      </div>
    </div>
  );
};

Search.defaultProps = {
  booksInShelve: [],
};

Search.propTypes = {
  goHome: PropTypes.func.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
  booksInShelve: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  queryResult: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Search;
