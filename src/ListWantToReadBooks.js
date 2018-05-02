import React, {Component} from 'react';
import * as BooksAPI from "./BooksAPI";

class ListWantToReadBooks extends Component{
    //TODO: Replace select tag default value with component state value

    // CURRENTLY_READING_SHELF = "currentlyReading";
    // WANT_TO_READ_SHELF = "wantToRead";
    // READ_SHELF = "read";
    //
    // updateBookShelf(e, book) {
    //     console.log(" Current shelf " + book.shelf + " New shelf", e.target.value);
    //     //update the book
    //     //insert book to a new bookshelf
    //     //remove book from the old bookshelf
    //     const bookShelf = e.target.value;
    //     switch (bookShelf) {
    //         case this.CURRENTLY_READING_SHELF:
    //             this.props.updateBook(book, this.CURRENTLY_READING_SHELF);
    //             this.props.addToCurrentlyReading(book);
    //             BooksAPI.update(book, this.CURRENTLY_READING_SHELF);
    //             this.removeFromShelf(book);
    //             break;
    //         case this.WANT_TO_READ_SHELF:
    //             this.props.updateBook(book, this.WANT_TO_READ_SHELF);
    //             this.props.addToWantToRead(book);
    //             BooksAPI.update(book, this.WANT_TO_READ_SHELF);
    //             this.removeFromShelf(book);
    //             break;
    //         case this.READ_SHELF:
    //             this.props.updateBook(book, this.READ_SHELF);
    //             this.props.addToRead(book);
    //             BooksAPI.update(book, this.READ_SHELF);
    //             this.removeFromShelf(book);
    //             break;
    //         default:
    //             break;
    //     }
    // }
    //
    // //Remove book from old book shelf
    // removeFromShelf = (book) => {
    //     this.props.removeFromWantToRead(book);
    // };

    render() {
        return (
            <div>
                <ol>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want To Read</h2>
                                {this.props.wantToReadBooks.map((book) =>
                                    <li key={book.title}>
                                        <div className="bookshelf-books">
                                            <ol className="books-grid">
                                                <li>
                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{
                                                                width: 128,
                                                                height: 193,
                                                                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                                            }}/>
                                                            <div className="book-shelf-changer">
                                                                <select value={book.shelf}
                                                                        onChange={(event) => this.props.updateBookShelf(event, book)}>
                                                                    <option value="none" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading
                                                                    </option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title">{book.title}</div>
                                                        <div className="book-authors">{book.authors[0]}</div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>
                                    </li>
                                )}
                            </div>
                        </div>
                    </div>
                </ol>
            </div>
        )
    }
}

export default ListWantToReadBooks;