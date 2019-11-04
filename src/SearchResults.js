import React, { Component } from 'react'
import PropTypes from "prop-types";
import BookList from "./BookList";

class SearchResults extends Component {
  handleSectionChangePropogation = (updatedSection, currentSection, book) => {
    this.props.onSectionChange(updatedSection, currentSection, book);
  };

  render() {
    const { books } = this.props;

    return (
      <BookList
        books={books}
        section={''}
        onSectionChange={this.handleSectionChangePropogation}
      />
    )
  }
}

export default SearchResults;

SearchResults.propTypes = {
  books: PropTypes.array,
  onSectionChange: PropTypes.func
};
