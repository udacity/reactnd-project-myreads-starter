import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class SearchBar extends Component {
  state = {
    query: ''
  };

  handleOnChange = event => {
    const searchParams = event.target.value;
    if (searchParams === ''){
      return this.props.onSearch([])
    }
    this.setState({ query: searchParams });
    this.searchBooks(searchParams)
  };

  searchBooks = searchParams => {
    BooksAPI.search(searchParams)
      .then(response => {
        if (response && response.error === "empty query") {
          this.props.onSearch(response.items)
        } else {
          this.props.onSearch(response)
        }
      })
      .catch(error => console.log(error))
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          onChange={this.handleOnChange}
          placeholder="Search by title or author"
        />
      </div>)
  }
}

export default SearchBar;