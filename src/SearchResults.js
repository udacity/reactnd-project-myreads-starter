import React, { Component } from 'react'
import PropTypes from "prop-types";

class SearchResults extends Component {

  render() {
    console.log("Wat is this?", typeof (this.props.books), this.props.books);
    const { books } = this.props;
    console.log("SearchResults", books)
    return (
      <ol>
        "show this"
        <li>one</li>
        <li>one</li>
        <li>{books.map(book => (book))}</li>
      </ol>
    )
  }
}

export default SearchResults;

// SearchResults.propTypes = {
//   results: PropTypes.array,
// };
