import React, {Component} from 'react';
import * as BooksAPI from "./BooksAPI";

class SearchBooks extends Component{
    CURRENTLY_READING_SHELF = "currentlyReading";
    WANT_TO_READ_SHELF = "wantToRead";
    READ_SHELF = "read";
    NONE_SHELF = "none";

    state = {
        nextQuery: "",
        prevQuery: "",
        searchBooks: [],
    };

    updateBookShelf(e, book) {
        console.log("Selected Book: "+book);
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
                this.removeFromShelf(book, oldBookShelf);
                break;
            case this.WANT_TO_READ_SHELF:
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
        console.log("ComponentDidMount called");

        BooksAPI.search(this.props.query).then((books) => {
            if(Array.isArray(books)) {
                this.setState({
                    searchBooks: books
                });

                // books.map((book) => {
                //     console.log(book.title)
                // })
            }
            else{
                console.log("Not array", books.toString());
                for(let property in books){
                    console.log(property +" = "+ books[property].toString())
                }
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
        console.log("ComponentWillReceiveProps called");
        console.log("this.props.query: "+this.props.query, " this.state.prevQuery:" + this.state.prevQuery, " nextprops: "+ nextProps.query);

        this.setState({
            nextQuery: this.props.query
        });

        this.setState({
            prevQuery: this.state.nextQuery
        });

        console.log("nextQuery: "+this.state.nextQuery);
    }

    //Should ComponentUpdate will return true the first render as prevQuery is empty the first render
    shouldComponentUpdate(nextProps) {
        console.log("ShouldComponentUpdate called");
        console.log("this.state.nextQuery: "+ this.state.nextQuery + " this.props.query: "+this.props.query,
            " this.state.prevQuery: "+ this.state.prevQuery + " this.props.query: "+this.props.query,
            " nextProps.query "+ nextProps.query);
        //Do not update when the queries are the same and No change made to searchBooks array
        if(this.state.prevQuery === this.state.nextQuery){
            console.log("Update" + false);
            return false;
        }
        console.log("Update" + true);
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ComponentDidUpdate called");
        console.log("this.state.nextQuery:"+ this.state.nextQuery,
            "this.state.prevQuery:"+ this.state.prevQuery,
            " this.props.query:"+ this.props.query,
            " prevProps.query:"+ prevProps.query );


        console.log("Making Search API call");
        BooksAPI.search(this.props.query).then((books) => {
            if(Array.isArray(books)) {
                this.setState({
                    searchBooks: books
                });

                // books.map((book) => {
                //     console.log(book.title)
                // });
            }
            else{
                console.log("Not array", books);
                for(let property in books){
                    console.log(property +" = "+ books[property].toString())
                }
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
        //Add books from searchBooks then replace books in showSearchBooks with books that are already present on the shelves
        const showSearchBooks = this.state.searchBooks;
        this.props.books.map((shelfBook) => {
            this.state.searchBooks.map((searchBook, index) => {
                if(shelfBook.title === searchBook.title){
                    console.log("Replaced ", searchBook.title,  " with ", shelfBook.title);
                    showSearchBooks.splice(index, 1, shelfBook)
                }
            })
        });

        console.log("SearchBooks Render called'");

        // showSearchBooks.map((book) => {
        //     console.log("ShowSearchBooks", book.title);
        // });

        return (
            <div className="search-books-results">
                <ol className="books-grid">
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
                                        <select value={book.shelf === undefined ? "notAssigned" : book.shelf}
                                                onChange={(event) => this.updateBookShelf(event, book)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading
                                            </option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="notAssigned">None</option>
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

export default SearchBooks;