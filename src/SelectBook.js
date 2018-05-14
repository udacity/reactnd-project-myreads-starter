import React, {Component} from 'react';

class SelectBook extends Component{
    CURRENTLY_READING_SHELF = "currentlyReading";
    WANT_TO_READ_SHELF = "wantToRead";
    READ_SHELF = "read";
    NONE_SHELF = "none";

    state = {
        //saving select value as a state for re-rendering to show selected value after shelf selected
        bookShelf: ""
    };

    updateBookShelf = (e, book) => {
        // update the book
        // insert book to a new bookshelf
        // remove book from the old bookshelf
        const oldBookShelf = book.shelf;
        const newBookShelf = e.target.value;
        switch (newBookShelf) {
            case this.CURRENTLY_READING_SHELF:
                this.props.addToBooks(book);
                this.props.updateBook(book, this.CURRENTLY_READING_SHELF);
                this.props.addToCurrentlyReading(book);
                this.removeFromShelf(book, oldBookShelf);
                break;
            case this.WANT_TO_READ_SHELF:
                this.props.addToBooks(book);
                this.props.updateBook(book, this.WANT_TO_READ_SHELF);
                this.props.addToWantToRead(book);
                this.removeFromShelf(book, oldBookShelf);
                break;
            case this.READ_SHELF:
                this.props.updateBook(book, this.READ_SHELF);
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

        this.setState({
            bookShelf: e.target.value
        })
    };

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
                //Book is not in shelf
                break;
        }
    };

    render(){
        return(
            <div className="book-shelf-changer">
                <select value={this.props.book.shelf === undefined ? "none" : this.props.book.shelf}
                        onChange={(event) => this.updateBookShelf(event, this.props.book)}>
                    <option value="notAssigned" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default SelectBook;