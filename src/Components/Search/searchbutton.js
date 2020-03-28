import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = ({ goBack }) => (
  <div className="open-search">
    <button onClick={() => goBack()}>Add a book</button>
  </div>
);

SearchButton.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default SearchButton;
