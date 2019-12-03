import React, { Component } from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
   };

  render() {  
    const {bookUpdate} = this.props;

    return (
      <div className="bookshelf has-background-primary is-bold">
        <figure className="title has-background-warning is-bold">
             <h2 className="title is-inline is-size-6 has-text-danger">{this.props.title}</h2>
        </figure>       
      <div className="columns is-multiline">
        {this.props.books.map(book => (
          <BookCard
            book={book}            
            key={book.id}
            bookUpdate={bookUpdate} 
          />
        ))}
      </div>
      </div> 
    );
  }
}

export default BookShelf;