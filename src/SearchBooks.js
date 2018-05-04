import React, {Component} from 'react';
import * as BooksAPI from "./BooksAPI";

class SearchBooks extends Component{
    CURRENTLY_READING_SHELF = "currentlyReading";
    WANT_TO_READ_SHELF = "wantToRead";
    READ_SHELF = "read";

    state = {
        nextQuery: "",
        prevQuery: "",
        searchBooks: []
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
                // BooksAPI.update(book, this.CURRENTLY_READING_SHELF);
                this.updateOnlineBook(book, this.CURRENTLY_READING_SHELF);
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

    updateOnlineBook(book, shelf){
        BooksAPI.update(book, shelf);
        BooksAPI.get(book.id).then(book => {
            console.log("updateBookOnline Book: "+book.title, book.shelf)
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
    //I don't understand why the nextQuery state is not updated below in the setState
    componentWillReceiveProps(nextProps) {
        console.log("ComponentWillReceiveProps called");
        console.log("this.props.query: "+this.props.query, " this.state.prevQuery:" + this.state.prevQuery, " nextprops: "+ nextProps.query);
        if(this.props.query !== nextProps.query){
            console.log("setState called");
            this.setState({
                nextQuery: nextProps.query
            });
            console.log("nextQuery: "+this.state.nextQuery)
        }

    }

    componentDidMount(){
        console.log("ComponentDidMount called");
        //Set current query as prevQuery for next Component call
        this.setState({
            prevQuery: this.props.query
        });

        // BooksAPI.search(this.props.query).then((books) => {
        //     if(Array.isArray(books)) {
        //         this.setState({
        //             searchBooks: books
        //         });
        //
        //         console.log(books[0]);
        //         books.map((book) => {
        //             console.log(book.title)
        //         })
        //         // this.state.searchBooks.map((book) => {
        //         //     console.log("ComponentDidUpdate", book.title)
        //         // });
        //     }
        //     else{
        //         console.log("Not array", books.toString());
        //         for(let property in books){
        //             console.log(property +" = "+ books[property].toString())
        //         }
        //     }
        // });
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount called");
    }

    shouldComponentUpdate(nextProps) {
        console.log("ShouldComponentUpdate called");
        console.log("this.state.nextQuery: "+ this.state.nextQuery + " this.props.query: "+this.props.query);
        console.log("this.state.prevQuery: "+ this.state.prevQuery + " this.props.query: "+this.props.query);
        console.log("nextProps.query "+ nextProps.query);
        //Do not update when the queries are the same
        if(nextProps.query === this.state.prevQuery){
            console.log("Update" + false);
            return false;
        }
        console.log("Update" + true);
        //Set current query as previous query for next update
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ComponentDidUpdate called");
        console.log("this.state.nextQuery:"+ this.state.nextQuery);
        console.log("this.props.query:"+ this.props.query);
        console.log("prevProps.query:"+ prevProps.query);

        //Set the current query as prevQuery for next Component call
        this.setState({
            prevQuery: this.props.query
        });

        //Do not search for empty queries
        if(this.props.query){
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
        }
    }

    render(){
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.searchBooks.map((book) => (
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
                                        {console.log(book.title, book.shelf)}
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