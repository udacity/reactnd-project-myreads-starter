import React from 'react';
import PropTypes from 'prop-types';
import GoBackButton from './gobackbutton';
/**
 * @description Searchbar Component
 * @param  {} {setQuery Sets Query String
 * @param  {} query Actual Query String
 * @param  {} goHome}  Function triggering router to go back to index page
 */
const SearchBar = ({ setQuery, query, goHome }) => (
  <div className="search-books-bar">
    <GoBackButton goBack={goHome} />
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
    </div>
  </div>
);

SearchBar.defaultProps = {
  query: '',
};

SearchBar.propTypes = {
  goHome: PropTypes.func.isRequired,
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;
