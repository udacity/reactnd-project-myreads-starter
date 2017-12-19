import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from 'react-loading'
import { search } from '../BooksAPI';
import Book from './Book';

export default class AddBook extends Component {

  state = {
    books: [],
    isLoading: false,
    error: ''
  }

  handlerSearch(query) {
    if (query.length <= 0) {
      return;
    }

    this.setState({ isLoading: true });

    search(query)
      .then(books => {
        debugger
        if(books.error) {
          return this.setState({
            books: [],
            error: books.error,
            isLoading: false
          })
        }

        this.setState({
          books,
          isLoading: false,
          error: ''
        })
      })
  }

  render() {
    const { books, isLoading, error } = this.state;

    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/"> Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(event) =>  this.handlerSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        {error.length > 0 && (
          <p>{error}</p>
        )}

        {isLoading === true && error.length < 0
        ? <Loading delay={200} type='bubbles' color='#222' />
        : books.map(book => (
            <li key={book.id}>
              <Book
                bookId={book.id}
                title={book.title}
                imagens={book.imageLinks}
                authors={book.authors}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
    )
  }
}
