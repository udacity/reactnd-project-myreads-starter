import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'

class SearchBooks extends React.Component {
  state = {
    query: '',
    books: []
  };

  handleChange = (e) => {
    const query = e.target.value;
    this.setState({query: query});
    if (query === '') {
      this.clearBooks();
    } else {
      this.getSearchResults(query);
    }
  }

  clearBooks = () => {
    this.setState({books: []})
  }

  getSearchResults = (query) => {
    BooksAPI.search(query)
      .then((res) => {
        if (res.error) {
          this.clearBooks()
        } else {
          this.setState(() => ({
            books: res
          }))
        }
      })
  }

  render() {
    const { query, books } = this.state;
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
          {books.length > 0 &&
            <BooksGrid
              books={books}
              onShelfChange={onShelfChange}
            />
          }
        </div>
      </div>
    )
  }
}

export default SearchBooks