import React, { Component } from 'react'
import PropTypes from "prop-types";
import BookList from "./BookList";

class SearchResults extends Component {
  render() {
    const { books } = this.props;
    console.log("SearchResults", books)

    return (
      <BookList
        bookIds={books}
        section={undefined}
      />
    )
  }
}

export default SearchResults;

SearchResults.propTypes = {
  books: PropTypes.array
};
