import React from 'react';
import PropTypes from 'prop-types';
/**
 * @description Button navigating to Another Page
 * @param  {} {openSearch} navigation method to open Search Component
 */
const SearchButton = ({ openSearch }) => (
  <div className="open-search">
    <button type="submit" onClick={() => openSearch()}>
      Add a book
    </button>
  </div>
);

SearchButton.propTypes = {
  openSearch: PropTypes.func.isRequired,
};

export default SearchButton;
