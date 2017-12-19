import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loading from 'react-loading'
import BookSection from './BookSection';
import { getAll } from '../BooksAPI'

export default class ListOfBooks extends Component {

  state = {
    books: [],
    isLoading: true,
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    const CURRENTLYREADING = 'currentlyReading';
    const WANTTOREAD = 'wantToRead';
    const READ = 'read';

    getAll()
      .then(books =>
        this.setState({
          currentlyReading: books.filter(book => book.shelf === CURRENTLYREADING),
          wantToRead: books.filter(book => book.shelf === WANTTOREAD),
          read : books.filter(book => book.shelf === READ),
          isLoading: false
        })
      )
  }

  bookShelfUpdate = (book) => {
    this.componentDidMount();
  }

  render() {
    const { isLoading, currentlyReading, wantToRead, read } = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>

        {isLoading === true
        ? <Loading delay={200} type='bubbles' color='#222' />
        : <div className="list-books-content">
            <BookSection
              title="Currently Reading"
              books={currentlyReading}
              bookShelfUpdate={this.bookShelfUpdate}
            />
            <BookSection
              title="Want to Read"
              books={wantToRead}
              bookShelfUpdate={this.bookShelfUpdate}
            />
            <BookSection
              title="Read"
              books={read}
              bookShelfUpdate={this.bookShelfUpdate}
            />
          </div>
        }
        <div className="open-search">
          <Link to="/add">
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}
