import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from 'react-loading'
import { search, getAll } from '../BooksAPI';
import Book from './Book';

export default class AddBook extends Component {

  state = {
    books: [],
    myBooks: [],
    isLoading: true,
    error: ''
  }

  componentDidMount() {
    getAll()
      .then(myBooks =>
        this.setState({ myBooks, isLoading: false }))
  }

  handlerSearch(query) {
    if (query.length <= 0) {
      return;
    }

    this.setState({ isLoading: true });

    search(query).then(result => {
      if (result.error) {
        return this.setState({ books: [], error: result.error, isLoading: false })
      }

      const books = result
      .map((book, index, array) => {
        const my = this.state.myBooks.filter(myBook => myBook.id === book.id)[0];

        if (my !== undefined) {
          return array[index] = my;
        }

        return array[index] = book;
      })

      this.setState({ books, isLoading: false, error: '' })
    })
  }

  render() {
    const { books, isLoading, error } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.handlerSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {error.length > 0 && (
              <p>{error}</p>
            )}

            {isLoading === true || error.length < 0
              ? <Loading delay={200} type='bubbles' color='#222'/>
              : books.map(book => (
                <li key={book.id}>
                  <Book
                    bookId={book.id}
                    title={book.title}
                    status={book.shelf}
                    imagens={book.imageLinks}
                    authors={book.authors}/>
                </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}
