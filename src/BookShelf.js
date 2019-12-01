import React, { Component } from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';

class BookShelf extends Component {
  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
   };

  render() {  

    return (
      <div className="bookshelf" >
      <nav className="level">
        <h4 className="bookshelf-title">{this.props.title}</h4>
      </nav>
      <div className="shelf-container">
      <div className="columns is-multiline">
        {this.props.books.map(book => (
          <BookCard
            book={book}            
            key={book.id}
            changeShelf={this.props.changeShelf}
          />
        ))}
      </div>
      </div>
      </div>    
    );
  }
}

export default BookShelf;