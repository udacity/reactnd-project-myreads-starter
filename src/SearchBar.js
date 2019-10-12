import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import SearchResults from "./SearchResults";

class SearchBar extends Component {
  state = {
    query: '',
    results: []
  };

  handleOnChange = (event) => {
    console.log("enter data", event.target.value)
    const searchParams = event.target.value;
    this.setState({
      query: searchParams
    },
      () => {
      this.searchBooks()
    }
    );

    console.log("Changing params here", this.state.query);
  };

  searchBooks = () => {
    if (this.state.query !== '') {
      BooksAPI.search(this.state.query)
        .then(response => {
          console.log("this is what i got from BooksApi", response);
          this.setState({
            results: response
          })
        })
        .catch(error => console.log(error));
      console.log("What is the state here?", typeof(this.state.results), this.state.results)
    }
  };

  // componentDidMount() {
  //   if (this.state.query !== '') {
  //     BooksAPI.search(this.state.query)
  //       .then(response => {
  //         console.log("this is what i got from BooksApi", response);
  //         this.setState({
  //           query: this.state.query,
  //           results: response
  //         })
  //       })
  //       .catch(error => console.log(error));
  //     console.log("What is the state here?", typeof(this.state.results), this.state.results)
  //   }
  // }

  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          onChange={this.handleOnChange}
          placeholder="Search by title or author"
        />

        <SearchResults className="search-books-results" books={this.state.results}/>
      </div>
    )
  }
}

export default SearchBar;