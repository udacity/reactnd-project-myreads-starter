import React, { Component } from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';

class BookShelf extends Component {
  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
   };

  render() {  

    const { books, changeShelf, shelf, } = this.props;

    return (
      <div className="bookshelf" >
      <nav className="level">
        <h4 className="bookshelf-title">{shelf}</h4>
      </nav>
      <div className="shelf-container">
      <div className="columns is-multiline">
        {books.map(book => (
          <BookCard
            book={book}
            books={books}
            key={shelf}
            changeShelf={this.changeShelf}
          />
        ))}
      </div>
      </div>
      </div>    
    );
  }
}

export default BookShelf;