import React, {Component} from 'react';
import * as BooksAPI from "./BooksAPI";

class SearchBooks extends Component{
    CURRENTLY_READING_SHELF = "currentlyReading";
    WANT_TO_READ_SHELF = "wantToRead";
    READ_SHELF = "read";

    state = {
        prevQuery: "",
        searchBooks: []
    };

    updateBookShelf(e, book) {
        console.log(" Current shelf " + book.shelf + " New shelf", e.target.value);
        //update the book
        //insert book to a new bookshelf
        //remove book from the old bookshelf
        const oldBookShelf = book.shelf;
        const newBookShelf = e.target.value;
        switch (newBookShelf) {
            case this.CURRENTLY_READING_SHELF:
                this.props.updateBook(book, this.CURRENTLY_READING_SHELF);
                this.props.addToCurrentlyReading(book);
                BooksAPI.update(book, this.CURRENTLY_READING_SHELF);
                this.removeFromShelf(book, oldBookShelf);
                break;
            case this.WANT_TO_READ_SHELF:
                this.props.updateBook(book, this.WANT_TO_READ_SHELF);
                this.props.addToWantToRead(book);
                BooksAPI.update(book, this.WANT_TO_READ_SHELF);
                this.removeFromShelf(book, oldBookShelf);
                break;
            case this.READ_SHELF:
                this.props.updateBook(book, this.READ_SHELF);
                this.props.addToRead(book);
                BooksAPI.update(book, this.READ_SHELF);
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
                //Book is not in shelf
                break;
        }
    };

    componentDidMount(){
        BooksAPI.search(this.props.query).then((books) => {
            this.setState({
                searchBooks: books
            });

            // console.log("SearchBooks Component mounted");
            // this.state.searchBooks.map((book) => {
            //     console.log("ComponentDidMount", book.title)
            // });
        });
    }

    shouldComponentUpdate() {
        if(this.state.prevQuery === this.props.query || this.props === ""){
            return false;
        }
        //Set current query as previous query for next update
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ComponentDidUpdate called");
        BooksAPI.search(this.props.query).then((books) => {
            if(books !== undefined) {
                this.setState({
                    searchBooks: books
                });
                this.setState({
                    prevQuery: this.props.query
                });
                console.log(books[0]);
                books.map((book) => {
                    console.log(book.title)
                })
                // this.state.searchBooks.map((book) => {
                //     console.log("ComponentDidUpdate", book.title)
                // });
            }
        });
    }

    render(){
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {/*{this.state.searchBooks !== undefined && (this.state.searchBooks.map((book) => (*/}
                        {/*<li key={book.id}>*/}
                            {/*<div className="book">*/}
                                {/*<div className="book-top">*/}
                                    {/*{book.imageLinks && (*/}
                                        {/*<div className="book-cover" style={{*/}
                                            {/*width: 128,*/}
                                            {/*height: 193,*/}
                                            {/*backgroundImage: `url(${book.imageLinks.thumbnail})`*/}
                                        {/*}}/>*/}
                                    {/*)}*/}
                                    {/*<div className="book-shelf-changer">*/}
                                        {/*<select value={book.shelf === undefined ? "none" : book.shelf}*/}
                                                {/*onChange={(event) => this.updateBookShelf(event, book)}>*/}
                                            {/*<option value="none" disabled>Move to...</option>*/}
                                            {/*<option value="currentlyReading">Currently Reading*/}
                                            {/*</option>*/}
                                            {/*<option value="wantToRead">Want to Read</option>*/}
                                            {/*<option value="read">Read</option>*/}
                                            {/*<option value="none">None</option>*/}
                                        {/*</select>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="book-title">{book.title}</div>*/}
                                {/*<div className="book-authors">{book.authors}</div>*/}
                            {/*</div>*/}
                        {/*</li>*/}
                    {/*)))}*/}
                </ol>
            </div>
        )
    }
}

export default SearchBooks;