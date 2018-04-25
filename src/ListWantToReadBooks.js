import React, {Component} from 'react';
import * as BooksAPI from "./BooksAPI";

class ListWantToReadBooks extends Component{
    //TODO: Replace select tag default value with component state value

    currentlyReadingShelf = "currentlyReading";
    wantToReadShelf = "wantToReadShelf";
    readShelf = "read";
    updateBookShelf(e, book) {
        console.log("Selected", e.target.value + " current value: " + book.shelf);
        //insert book to a new bookshelf
        //remove book from the old bookshelf
        const bookShelf = e.target.value;
        switch (bookShelf){
            case this.currentlyReadingShelf:
                this.props.addToCurrentlyReading(book);
                this.removeFromShelf(book);
                BooksAPI.update(book, this.currentlyReadingShelf);
                break;
            case this.wantToReadShelf:
                this.props.addToWantToRead(book);
                this.removeFromShelf(book);
                BooksAPI.update(book, this.wantToReadShelf);
                break;
            case this.readShelf :
                this.props.addToRead(book);
                this.removeFromShelf(book);
                BooksAPI.update(book, this.readShelf);
                break;
            default:
                break;
        }
    }
    //Remove book from old book shelf
    removeFromShelf = (book) => {
        switch (book.shelf){
            case "currentlyReading":
                this.props.removeFromCurrentlyReading(book);
                break;
            case "wantToRead":
                this.props.removeFromWantToRead(book);
                break;
            case "read" :
                this.props.removeFromRead(book);
                break;
            default:
                break;
        }
    };

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
                                                                <select value="wantToRead"
                                                                        onChange={(event) => this.updateBookShelf(event, book)}>
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