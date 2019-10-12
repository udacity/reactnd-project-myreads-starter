import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from "prop-types";
import SearchResults from "./SearchResults";

class SearchBar extends Component {
  state = {
    query: ''
  };

  handleOnChange = (event) => {
    console.log("enter data", event.target.value)
    const searchParams = event.target.value;
    this.setState({
        query: searchParams
      },
      () => {
        this.searchBooks(searchParams)
      }
    );

    console.log("Changing params here", this.state.query);
  };

  searchBooks = searchParams => {
    BooksAPI.search(searchParams)
      .then(response => {
        console.log("this is what i got from BooksApi", response);
        this.props.onSearch(response)
      })
      .catch(error => console.log(error));
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