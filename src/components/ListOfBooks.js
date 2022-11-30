import React from 'react';
import PropTypes from 'prop-types';
import BookOnShelf from './BooksOnShelf';

const ListOfBooks = props => {

  const { books, switchShelfOption } = props;
  const booksShelfCategory = [
    {
      type: 'currentlyReading',
      title: 'Currently Reading'
    },
    {
      type: 'wantToRead',
      title: 'Want to Read'
    },
    {
      type: 'read',
      title: 'Read'
    }
  ];

  return (
    <div className="list-books-content">
      {booksShelfCategory.map((category, index) => {
        const shelfBooks = books.filter(book => book.shelf === category.type);
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{category.title}</h2>
            <div className="bookshelf-books">
              <BookOnShelf books={shelfBooks} switchShelfOption={switchShelfOption} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

ListOfBooks.propTypes = {
  books: PropTypes.array.isRequired,
  switchShelfOption: PropTypes.func.isRequired
};

export default ListOfBooks;
