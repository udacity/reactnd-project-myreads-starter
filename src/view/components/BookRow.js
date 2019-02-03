import React, { Component } from 'react';
import Book from './Book';

export default class BookRow extends Component {
  render() {
    console.log(this.props.books)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book, index) => (
              <li key={index}>
                <Book
                  author={book.author}
                  title={book.title}
                  conver={book.cover}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}