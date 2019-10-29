import React, { Component } from 'react'
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { Link } from 'react-router-dom';

class Search extends Component {
  state = {
    results: []
  };

  handleOnSearch = (response) => {
    this.setState({
      results: response
    })
  };

  onSectionChange = (updatedSection, currentSection, book) => {
    console.log('Inside Search');
    this.props.onSectionChange(updatedSection, currentSection, book);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'>
            Close
          </Link>
          <SearchBar onSearch={this.handleOnSearch}/>
        </div>

        <div className="search-books-results">
          <SearchResults
            books={this.state.results}
            onSectionChange={this.onSectionChange}
          />
        </div>
      </div>
    )
  }
}

export default Search;