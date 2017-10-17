import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

class BookShelf extends React.Component {

  static propTypes = {
    shelfName: PropTypes.string.isRequired,
    books: PropTypes.array
  }

  render() {

    const { shelfName, books, changeBookShelf } = this.props;

    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                <li>
                <Book key={book.id} book={book} changeBookShelf={changeBookShelf} />
                </li>
              ))}
            </ol>
          </div>
        </div>
    );
  }
}

export default BookShelf;


