import React, {Component} from 'react';
import * as BooksAPI from "./BooksAPI";

class ListSearchBooks extends Component{
    CURRENTLY_READING_SHELF = "currentlyReading";
    WANT_TO_READ_SHELF = "wantToRead";
    READ_SHELF = "read";
    NONE_SHELF = "none";

    state = {
        nextQuery: "",
        prevQuery: "",
        searchBooks: [],
        bookShelf: "default shelf" //saving select value as a state for re-rendering to show selected value after shelf selected
    };

    updateBookShelf = (e, book) => {
        console.log("UpdateBookShelf called");

        //update the book
        //insert book to a new bookshelf
        //remove book from the old bookshelf
        // const oldBookShelf = book.shelf;
        // const newBookShelf = e.target.value;
        // switch (newBookShelf) {
        //     case this.CURRENTLY_READING_SHELF:
        //         this.props.addToBooks(book);
        //         this.props.updateBook(book, this.CURRENTLY_READING_SHELF);
        //         this.props.addToCurrentlyReading(book);
        //         this.removeFromShelf(book, oldBookShelf);
        //         break;
        //     case this.WANT_TO_READ_SHELF:
        //         this.props.addToBooks(book);
        //         this.props.updateBook(book, this.WANT_TO_READ_SHELF);
        //         this.props.addToWantToRead(book);
        //         this.removeFromShelf(book, oldBookShelf);
        //         break;
        //     case this.READ_SHELF:
        //         this.props.updateBook(book, this.READ_SHELF);
        //         this.props.addToRead(book);
        //         this.removeFromShelf(book, oldBookShelf);
        //         break;
        //     case this.NONE_SHELF:
        //         this.props.updateBook(book, this.NONE_SHELF);
        //         this.removeFromShelf(book, oldBookShelf);
        //         break;
        //     default:
        //         break;
        // }

        this.setState({
            bookShelf: e.target.value
        })
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
            if(Array.isArray(books)) {
                this.setState({
                    searchBooks: books
                });
            }
            else{
                console.log("Error, keyword is not valid");
                this.setState({
                    searchBooks: []
                })
            }
        });

        // Set current query as prevQuery for next Component call
        this.setState({
            nextQuery: this.props.query
        });

        this.setState({
            prevQuery: this.state.nextQuery
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            nextQuery: this.props.query
        });

        this.setState({
            prevQuery: this.state.nextQuery
        });
    }

    //Should ComponentUpdate will return true the first render as prevQuery is empty the first render
    shouldComponentUpdate() {
        //Do not update when the queries are the same and No change made to searchBooks array
        if(this.state.prevQuery === this.state.nextQuery){
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        BooksAPI.search(this.props.query).then((books) => {
            if(Array.isArray(books)) {
                this.setState({
                    searchBooks: books
                });
            }
            else{
                console.log("Error, keyword is not valid");
                this.setState({
                    searchBooks: []
                })
            }
        });

        //Set the current query as prevQuery for next Component call
        this.setState({
            nextQuery: this.props.query
        });

        this.setState({
            prevQuery: this.state.nextQuery
        });
    }

    render(){
        console.log("ListSearchBooks Render called");
        //Add books from searchBooks then replace books in showSearchBooks with books that are already present on the shelves
        const showSearchBooks = this.state.searchBooks;
        this.props.books.map((shelfBook) => {
            console.log("Shelf Books:",shelfBook.title, " shelf ", shelfBook.shelf);
            this.state.searchBooks.map((searchBook, index) => {
                if(shelfBook.title === searchBook.title){
                    // console.log("Replacing", searchBook.title);
                    showSearchBooks.splice(index, 1, shelfBook)
                }
            })
        });

        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    <div>{this.state.bookShelf}</div>
                    {showSearchBooks.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    {book.imageLinks && (
                                        <div className="book-cover" style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                                        }}/>
                                    )}
                                    <div className="book-shelf-changer">
                                        <select value={book.shelf === undefined ? "none" : book.shelf}
                                                onChange={(event) => this.updateBookShelf(event, book)}>
                                            <option value="notAssigned" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default ListSearchBooks;