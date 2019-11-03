import React, { Component } from 'react'
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    results: []
  };

  handleOnSearch = (response) => {
    let newState = [];

    if(response !== undefined){
      newState = this.addShelfPropertyToResults(response)
    }

    this.updateResults(newState)
  };

  updateResults = (newState) => {
    this.setState({ results: newState })
  };

  onSectionChange = (updatedSection, currentSection, book) => {
    this.props.onSectionChange(updatedSection, currentSection, book);
  };

  findBookById = (bookId) => {
    const { bookshelf } = this.props;
    let book = {};
    bookshelf.some(section => {
      book = section.books.find(book =>
        book.id === bookId
      );
      return book
    });
    return book
  };

  addShelfPropertyToResults = (response) => {
    return response.map(book => {
      let newBook = this.findBookById(book.id)
      book = Object.assign(book, newBook, {})
      return book
    })
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

Search.propTypes = {
  bookshelf: PropTypes.array,
  onSectionChange: PropTypes.func
};

export default Search;