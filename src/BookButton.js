import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import * as BooksAPI from './BooksAPI'

class BookButton extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };

    changeShelf = (event) => {
//      BooksAPI.update(this.props.book, event.target.value)
      this.props.bookUpdate(this.props.book, event.target.value)
  };

  render() {
    const {book} = this.props;
    return (
      <div className="book-shelf-changer has-background-dark is-bold has-text-white">
        <select 
        value={book} 
        onChange={this.changeShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="">None</option>
        </select>
      </div>

    );
  }
}

export default BookButton;