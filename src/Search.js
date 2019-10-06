import React, { Component } from 'react'
import SearchBar from "./SearchBar";

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
      </div>
    )
  }
}

export default Search;