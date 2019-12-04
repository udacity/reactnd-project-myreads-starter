import React, {Component} from 'react';
import BookButton from './BookButton';
import PropTypes from 'prop-types';


class BookCard extends Component {
static propTypes = {
    book: PropTypes.object.isRequired,
    bookUpdate: PropTypes.func.isRequired,
    resultBooks: PropTypes.array.isRequired,
}
state = {
}

render(){
    const { book, bookUpdate, resultBooks, ...other} = this.props;
    const cover = book.imageLinks.thumbnail;
    
        return (
                <div className="card book-card has-background-danger is-bold has-text-white" id={book.id}>
                    <div className="card-image">
                        <figure className="image book-cover"> 
                            <img src={cover} alt="book cover" />
                        </figure>                    
                    </div>
                    <div className="card-content">
                        <div className="content book-info ">                    
                        <span className="author-label has-text-white">By:</span>
                             {book.authors &&
                                    book.authors.map((author, index) => (
                                <p className="book-author has-text-white" key={index}>
                                    {author}
                                    </p>
                            ))}                                  
                        <BookButton 
                        className="book-button" 
                        book={book}                                         
                        bookUpdate={bookUpdate}
                        resultBooks={resultBooks}
                        {...other}
                        />
                </div>
            </div>
            </div>
            
        )
    }
}


export default BookCard