import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Selector from './Selector';
import BookListItem from "./BookListItem";

class BookList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.section}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books.map((book, index) => (
                  <BookListItem book={book} key={index}/>
                ))
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired
};

export default BookList;


// {
//   this.props.books.map(book =>
//     (
//       <BookListItem book={book} key={book.name}/>
//     )
//   )
// }