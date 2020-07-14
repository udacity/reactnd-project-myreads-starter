import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'

class SearchBooks extends React.Component {
  static propTypes = {
    onShelfChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  state = {
    query: '',
    results: []
  };

  handleChange = (e) => {
    const query = e.target.value;
    this.setState({query: query});
    if (query === '') {
      this.clearResults();
    } else {
      this.getSearchResults(query);
    }
  }

  clearResults = () => {
    this.setState({results: []})
  }

  /*
  The search results don't always have the correct shelf
  information, so add it from the books on the shelves.
  */
  addShelfInfo = (books) => {
    const booksWithShelf = books.map((book) => {
      const bookOnShelf = this.props.books.find((b) => b.id === book.id)
      return ({
        ...book,
        ...bookOnShelf
      })
    })

    return booksWithShelf
  }

  getSearchResults = (query) => {
    BooksAPI.search(query)
      .then((response) => {
        if (response.error) {
          this.clearResults()
        } else {
          this.setState(() => ({
            results: this.addShelfInfo(response)
          }))
        }
      })
  }

  render() {
    const { query, results } = this.state;
    const { onShelfChange } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
          >
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleChange}
              value={query}
            />
          </div>
        </div>
        <div className="search-books-results">
          {results.length > 0 &&
            <BooksGrid
              books={results}
              onShelfChange={onShelfChange}
            />
          }
        </div>
      </div>
    )
  }
}

export default SearchBooks