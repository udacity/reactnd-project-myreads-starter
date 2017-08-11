import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Debounce } from 'react-throttle';
// import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import './App.css';

function stop(books) {
  debugger;
}

class BookSearch extends Component {

  // static propTypes = {
  //   books: PropTypes.array.isRequired;
  // }

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    const query = event.target.value;
    if (query.length) {
      BooksAPI.search(event.target.value, 20)
      .then(books => this.setState({results: books}));
    } else {
      this.setState({results: []});
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
