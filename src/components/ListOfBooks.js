import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import BookSection from './BookSection';
import * as BooksAPI from '../BooksAPI'

export default class ListOfBooks extends Component {

  state = {
    books: [],
    isLoading: false
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    BooksAPI
      .getAll()
      .then(books => {
        this.setState({ books })
        this.setState({ isLoading: false })
      })
  }

  render() {
    const { books, isLoading } = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>

      {isLoading !== true && (
        <div className="list-books-content">
            <BookSection title="Currently Reading" books={books} />
            <BookSection title="Want to Read" books={books} />
            <BookSection title="Read" books={books} />
        </div>
      )}
        <div className="open-search">
          <Link to="/add">
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

ListOfBooks.proptypes = {
  books: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}
