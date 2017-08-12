import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Debounce } from 'react-throttle';
// import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import './App.css';

class BookSearch extends Component {

  // static propTypes = {
  //   books: PropTypes.array.isRequired;
  // }

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    };

    this.handleChange = this.handleChange.bind(this);

  }

  /*
   * TODO: Add visual feedback while waiting for response
   */
  handleChange(event) {
    const query = event.target.value || '';
    if (this.state.query !== query) {
      this.setState({query});
      query.length && BooksAPI.search(query, 10).then(books =>
        this.setState({results: books}));
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <Debounce time="400" handler="onChange">
              <input type="text" placeholder="Search by title or author"
                onChange={this.handleChange}/>
            </Debounce>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.length > 0 && this.state.results.map(result =>
              <li key={result.id}>
                <Book {...result} />
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch;
