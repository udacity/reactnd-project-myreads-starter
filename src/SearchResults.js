import React, { Component } from 'react'
import PropTypes from "prop-types";
import BookList from "./BookList";

class SearchResults extends Component {

  render() {
    const { books } = this.props;

    return (
      <BookList
        books={books}
        section={''}
      />
    )
  }
}

export default SearchResults;

SearchResults.propTypes = {
  books: PropTypes.array,
  onSectionChange: PropTypes.func
};
