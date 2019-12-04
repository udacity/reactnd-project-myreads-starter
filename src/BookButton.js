import React, {Component} from 'react';
import PropTypes from 'prop-types';



class BookButton extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };
  
    changeShelf = (book, shelf) => {
      const bookUpdate = this.bookUpdate()
      bookUpdate(book, shelf)

  };


  render() {
    const {book} = this.props;
    return (
      <div className="book-shelf-changer has-background-dark is-bold has-text-white">
        <select 
        ref={this.select}
        book={book}
        defaultValue={book.shelf} 
        onClick={this.changeShelf(this.props.book, this.select)}>          
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="">Remove</option>
        </select>
      </div>

    );
  }
}

export default BookButton;