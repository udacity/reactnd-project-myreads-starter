import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { search } from '../BooksAPI'
import BookList from '../components/BookList'

export default class Search extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (event) => {
    event.preventDefault();
    const query = event.target.value;
    this.setState({ query })
    search(query).then().then(books => this.setState({ books }))
  }

  render() {
    const { books } = this.state
    const { updateBook } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
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
              value={this.state.query}
              onChange={(event) => this.updateQuery(event)}
            />

          </div>
        </div>
        <BookList updateBook={updateBook} books={books} />
      </div>
    )
  }
}

Search.propTypes = {
  updateBook: PropTypes.func.isRequired
};
