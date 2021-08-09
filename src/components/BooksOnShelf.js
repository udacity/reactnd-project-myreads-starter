import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Books from './Books';

class BookOnShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    switchShelfOption: PropTypes.func.isRequired
  };

  render() {

    return (
      <ol className="books-grid">
        {this.props.books.map(book => (
          <Books
            book={book}
            books={this.props.books}
            key={book.id}
            switchShelfOption={this.props.switchShelfOption}
          />
        ))}
      </ol>
    );
  }
}

export default BookOnShelf;
