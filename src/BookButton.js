import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'



class BookButton extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };
  
  onRemoveBook(book, shelf) {
    BooksAPI.update(book, shelf)
    .then(this.updateBookShelf)
    }

    changeShelf = (event) => {

      this.bookUpdate(this.props.book, event.target.value)
  };


  render() {
    const {book} = this.props;
    return (
      <div className="book-shelf-changer has-background-dark is-bold has-text-white">
        <select 
        ref={this.select && this.onRemoveBook}
        book={book}
        defaultValue={book.shelf} 
        onChange={this.select}>          
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value={this.onRemoveBook(book)}>Remove</option>
        </select>
      </div>

    );
  }
}

export default BookButton;