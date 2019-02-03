import React, { Component } from 'react';
import Book from './Book';

export default class BookRow extends Component {
  render() {
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
                  cover={book.cover}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}