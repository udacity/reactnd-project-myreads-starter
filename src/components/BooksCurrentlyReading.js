import React, { Component } from 'react';
import BookListing from './BookListing';

class BooksCurrentlyReading extends Component {
    state = {}
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <BookListing 
                            books={this.props.books}
                        />                        
                    </ol>
                </div>
            </div>
        );
    }
}

export default BooksCurrentlyReading;