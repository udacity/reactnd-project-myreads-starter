import React, {Component} from 'react';
import * as BooksAPI from "./BooksAPI";
import SelectBook from './SelectBook';

class ListSearchBooks extends Component{
    state = {
        nextQuery: "",
        prevQuery: "",
        searchBooks: [],
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
        //Add books from searchBooks then replace books in showSearchBooks with books that are already present on the shelves
        const showSearchBooks = this.state.searchBooks;
        this.props.books.map((shelfBook) => {
            this.state.searchBooks.map((searchBook, index) => {
                if(shelfBook.title === searchBook.title){
                    showSearchBooks.splice(index, 1, shelfBook)
                }
            })
        });
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
                                    <SelectBook book={book}
                                                addToBooks={(book) => this.props.addToBooks(book)}
                                                addToCurrentlyReading={(book) => this.props.addToCurrentlyReading(book)}
                                                addToWantToRead={(book) => this.props.addToWantToRead(book)}
                                                addToRead={(book) => this.props.addToRead(book)}
                                                removeFromCurrentlyReading={(book) => this.props.removeFromCurrentlyReading(book)}
                                                removeFromWantToRead={(book) => this.props.removeFromWantToRead(book)}
                                                removeFromRead={(book) => this.props.removeFromRead(book)}
                                                updateBook={(book, shelf) => this.props.updateBook(book, shelf)}/>
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