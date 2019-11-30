import React from 'react';
import BookButton from './BookButton';
import Placeholder from './images/steve.jpg';
import PropTypes from 'prop-types';

const BookCard = props => {

        const { book, changeShelf } = props;

        const cover =
        book.imageLinks && book.imageLinks.thumbnail
          ? book.imageLinks.thumbnail
          : Placeholder;
      

        return (
            <div className="column">
                <div className="card book-card">
                    <div className="card-image">
                        <figure className="image book-cover"> 
                            <img src={cover} alt="book cover" />
                        </figure>                    
                    </div>
                    <div className="card-content">
                        <div className="content book-info">                    
                        <span className="author-label">By:</span>
                             {book.authors &&
                                    book.authors.map((author, index) => (
                                <p className="book-author" key={index}>
                                    {author}
                                    </p>
                            ))}                                  
                    </div>
                    <div className="card-footer">
                        <BookButton className="book-button" book={book} changeShelf={this.changeShelf} />
                    </div>
                </div>
            </div>
            </div>
        )
    }
    BookCard.propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
      }

export default BookCard