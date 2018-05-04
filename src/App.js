import React from 'react';
import {Link, Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import Search from './Search';
import FooComponent from "./FooComponent";

class BooksApp extends React.Component {
    CURRENTLY_READING = "currentlyReading";
    WANT_TO_READ = "wantToRead";
    READ = "read";

    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        //TODO: Make a state for each component separately and use that state as the default value for that component
        //TODO: Check if book has author
        //TODO: Create background component and send searchBooks as props and map over the searchBooks array
        //TODO: rename property Thumbnail
        //TODO: Recheck specifications
        //TODO: Code clean up
        //TODO: Review Whole project
        books: [],
        currentlyReading: [],
        wantToRead: [],
        read: []
    };


    addToCurrentlyReading = (book) => {
        this.setState((state) => ({
            currentlyReading: state.currentlyReading.concat([book])
        }));
        console.log("New currently Reading books:");
        this.state.currentlyReading.map(book => console.log(book.title));
    };

    addToWantToRead = (book) => {
        this.setState((state) => ({
            wantToRead: state.wantToRead.concat([book])
        }));
        console.log("New want to read books:");
        this.state.wantToRead.map(book => console.log(book.title));
    };

    addToRead = (book) => {
        this.setState((state) => ({
            read: state.read.concat([book])
        }));
        console.log("New read books:");
        this.state.read.map(book => console.log(book.title));
    };

    removeFromCurrentlyReading = (book) => {
        console.log("removeFromCurrentlyReading: ", book.title);
        this.setState((state) => ({
            currentlyReading: state.currentlyReading.filter(cBook => cBook.title !== book.title)
        }))
    };

    removeFromWantToRead = (book) => {
        console.log("removeFromWantToRead: ", book.title);
        this.setState((state) => ({
            wantToRead: state.wantToRead.filter(cBook => cBook.title !== book.title)
        }))
    };

    removeFromRead = (book) => {
        this.setState((state) => ({
            read: state.read.filter(cBook => cBook !== book)
        }))
    };

    updateBook = (book, shelf) => {
        book.shelf = shelf;
        console.log("Book updated to  " + book.shelf)
    };

    updateLinuxBook = () => {
        this.state.books.map((book) => {
            if(book.title === "The Linux Command Line"){
                BooksAPI.update(book, "currentlyReading");
                book.imageLinks.smallThumbnail = "";
            }
        })
    };


    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            });
            //categorizing the books pulled from the server
            books.map((book) => {
                console.log(book);
                if (book.shelf === this.CURRENTLY_READING) {
                    this.setState({
                        currentlyReading: this.state.currentlyReading.concat([book])
                    });
                }
                if (book.shelf === this.WANT_TO_READ) {
                    this.setState({
                        wantToRead: this.state.wantToRead.concat([book])
                    });
                }
                if (book.shelf === this.READ) {
                    this.setState({
                        read: this.state.read.concat([book])
                    });
                }
            })
        });
    };


    render() {
        return (
            <div className="app">
                <Link to="/search"> Search </Link>
                <button onClick={this.updateLinuxBook}>TestLinuxBook</button>
                <Route exact path='/search' render={() => (
                    <Search books={this.state.books}
                            addToCurrentlyReading={(book) => this.addToCurrentlyReading(book)}
                            addToWantToRead={(book) => this.addToWantToRead(book)}
                            addToRead={(book) => this.addToRead(book)}
                            removeFromCurrentlyReading={(book) => this.removeFromCurrentlyReading(book)}
                            removeFromWantToRead={(book) => this.removeFromWantToRead(book)}
                            removeFromRead={(book) => this.removeFromRead(book)}
                            updateBook={(book, shelf) => this.updateBook(book, shelf)}/>
                )}/>
                <Route exact path='/' render={() => (
                    <ListBooks currentlyReading={this.state.currentlyReading}
                               wantToRead={this.state.wantToRead}
                               read={this.state.read}
                               addToCurrentlyReading={(book) => this.addToCurrentlyReading(book)}
                               addToWantToRead={(book) => this.addToWantToRead(book)}
                               addToRead={(book) => this.addToRead(book)}
                               removeFromCurrentlyReading={(book) => this.removeFromCurrentlyReading(book)}
                               removeFromWantToRead={(book) => this.removeFromWantToRead(book)}
                               removeFromRead={(book) => this.removeFromRead(book)}
                               updateBook={(book, shelf) => this.updateBook(book, shelf)}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
