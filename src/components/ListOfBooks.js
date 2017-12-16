import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookSection from './BookSection';
import { getAll } from '../BooksAPI'

export default class ListOfBooks extends Component {

  state = {
    books: [],
    isLoading: false
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    getAll()
      .then(books =>
        this.setState({
          books, isLoading: false
        }))
  }

  render() {
    const { books, isLoading } = this.state;
    const CURRENTLYREADING = 'currentlyReading';
    const WANTTOREAD = 'wantToRead';
    const READ = 'read';

    const currentlyReading = books.filter(book => book.shelf === CURRENTLYREADING);
    const wantToRead = books.filter(book => book.shelf === WANTTOREAD);
    const read = books.filter(book => book.shelf === READ);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>

        {isLoading !== true && (
          <div className="list-books-content">
            <BookSection title="Currently Reading" books={currentlyReading} />
            <BookSection title="Want to Read" books={wantToRead} />
            <BookSection title="Read" books={read} />
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
