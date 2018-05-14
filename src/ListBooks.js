import React, {Component} from 'react';
import ListCurrentlyReadingBooks from './ListCurrentlyReadingBooks';
import ListWantToReadBooks from './ListWantToReadBooks';
import ListReadBooks from './ListReadBooks';
import {Link} from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";

class ListBooks extends Component {

    CURRENTLY_READING_SHELF = "currentlyReading";
    WANT_TO_READ_SHELF = "wantToRead";
    READ_SHELF = "read";
    NONE_SHELF = "none";


    updateBookShelf(e, book) {
        //update the book
        //insert book to a new bookshelf
        //remove book from the old bookshelf
        const oldBookShelf = book.shelf;
        const newBookShelf = e.target.value;
        switch (newBookShelf) {
            case this.CURRENTLY_READING_SHELF:
                this.props.updateBook(book, newBookShelf);
                this.props.addToCurrentlyReading(book);
                this.removeFromShelf(book, oldBookShelf); //remove book from old shelf
                break;
            case this.WANT_TO_READ_SHELF:
                this.props.updateBook(book, newBookShelf);
                this.props.addToWantToRead(book);
                this.removeFromShelf(book, oldBookShelf);
                break;
            case this.READ_SHELF:
                this.props.updateBook(book, newBookShelf);
                this.props.addToRead(book);
                this.removeFromShelf(book, oldBookShelf);
                break;
            case this.NONE_SHELF:
                this.props.updateBook(book, this.NONE_SHELF);
                this.removeFromShelf(book, oldBookShelf);
                break;
            default:
                break;
        }
    }

    removeFromShelf = (book, shelf) => {
        switch(shelf){
            case this.CURRENTLY_READING_SHELF:
                this.props.removeFromCurrentlyReading(book);
                break;
            case this.WANT_TO_READ_SHELF:
                this.props.removeFromWantToRead(book);
                break;
            case this.READ_SHELF:
                this.props.removeFromRead(book);
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <ListCurrentlyReadingBooks currentlyReadingBooks={this.props.currentlyReading}
                                           addToCurrentlyReading={(book) => this.props.addToCurrentlyReading(book)}
                                           addToWantToRead={(book) => this.props.addToWantToRead(book)}
                                           addToRead={(book) => this.props.addToRead(book)}
                                           removeFromCurrentlyReading={(book) => this.props.removeFromCurrentlyReading(book)}
                                           removeFromWantToRead={(book) => this.props.removeFromWantToRead(book)}
                                           removeFromRead={(book) => this.props.removeFromRead(book)}
                                           updateBookShelf={(event, book) => this.updateBookShelf(event, book)}/>
                <ListWantToReadBooks wantToReadBooks={this.props.wantToRead}
                                     addToCurrentlyReading={(book) => this.props.addToCurrentlyReading(book)}
                                     addToWantToRead={(book) => this.props.addToWantToRead(book)}
                                     addToRead={(book) => this.props.addToRead(book)}
                                     removeFromCurrentlyReading={(book) => this.props.removeFromCurrentlyReading(book)}
                                     removeFromWantToRead={(book) => this.props.removeFromWantToRead(book)}
                                     removeFromRead={(book) => this.props.removeFromRead(book)}
                                     updateBookShelf={(event, book) => this.updateBookShelf(event, book)}/>
                <ListReadBooks readBooks={this.props.read}
                               addToCurrentlyReading={(book) => this.props.addToCurrentlyReading(book)}
                               addToWantToRead={(book) => this.props.addToWantToRead(book)}
                               addToRead={(book) => this.props.addToRead(book)}
                               removeFromCurrentlyReading={(book) => this.props.removeFromCurrentlyReading(book)}
                               removeFromWantToRead={(book) => this.props.removeFromWantToRead(book)}
                               removeFromRead={(book) => this.props.removeFromRead(book)}
                               updateBookShelf={(event, book) => this.updateBookShelf(event, book)}/>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks;