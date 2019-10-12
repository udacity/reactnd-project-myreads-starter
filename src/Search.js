import React, { Component } from 'react'
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

class Search extends Component {
  state = {
    results: []
  }

  handleOnClick = () => {
    this.props.history.push('/')
  };

  handleOnSearch = (response) => {
   console.log('Did I get raise to Search component?', response);
    this.setState({
      results: response
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={this.handleOnClick}>Close</button>
          <SearchBar onSearch={this.handleOnSearch} />
        </div>

        <div className="search-books-results">
          <SearchResults
            books={this.state.results}
          />
        </div>
      </div>
    )
  }
}

export default Search;