import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {

  static propTypes = {
    book: PropTypes.shape({
      id: PropTypes.string,
      imageLinks: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.array,
      shelf: PropTypes.string,
      categories: PropTypes.array
    }),
    changeBookShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, changeBookShelf } = this.props;
    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select id={book.id} value={book.shelf || 'None'} onChange={changeBookShelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors && book.authors.map((author) => (
            <div key={author} className="book-authors">{author}</div>
          ))}

          {book.categories && book.categories.map((category) => (
            <div key={category} className="book-categories">{category}</div>
          ))}

        </div>
    );
  }
}

export default Book;


