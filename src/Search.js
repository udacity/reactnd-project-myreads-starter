import React, { Component } from 'react'
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

class Search extends Component {

  handleOnClick = () => {
    this.props.history.push('/')
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={this.handleOnClick}>Close</button>
          <SearchBar/>
        </div>
        <div className="search-books-results">
          <SearchResults/>
        </div>
      </div>
    )
  }
}

export default Search;