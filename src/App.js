import React from 'react';
import {Link, Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import Search from './Search';

class BooksApp extends React.Component {
    CURRENTLY_READING_SHELF = "currentlyReading";
    WANT_TO_READ_SHELF = "wantToRead";
    READ_SHELF = "read";

    state = {
        //TODO: Code clean up, remove all logs
        //TODO: Rename Component Title WantToRead and Read
        //TODO: Review Whole project
        books: [],
        currentlyReading: [],
        wantToRead: [],
        read: []
    };

    addToBooks = (book) => {
        //Check if the book is already present in the shelves
        //if not present add to shelf
        //update book to provided shelf
        //categorize all the books to appropriate shelves
        let isPresent = false;
        for(let i = 0; i < this.state.books.length; i++){
            if(this.state.books[i].title === book.title){
                isPresent = true;
                console.log("Already Present: ", book.title)
            }
        }

        if(!isPresent){
            console.log("Adding new book", book.title);
            this.setState((state) => ({
                books: state.books.concat([book])
            }));
        }

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
        //update locally
        book.shelf = shelf;
        //update to server
        BooksAPI.update(book, shelf);
        console.log("Book updated to  " + book.shelf)
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            });
            //categorizing the books pulled from the server
            books.map((book) => {
                console.log(book);
                if (book.shelf === this.CURRENTLY_READING_SHELF) {
                    this.setState({
                        currentlyReading: this.state.currentlyReading.concat([book])
                    });
                }
                if (book.shelf === this.WANT_TO_READ_SHELF) {
                    this.setState({
                        wantToRead: this.state.wantToRead.concat([book])
                    });
                }
                if (book.shelf === this.READ_SHELF) {
                    this.setState({
                        read: this.state.read.concat([book])
                    });
                }
            })
        });
    };


    render() {
        console.log("Called Render")
        return (
            <div className="app">
                <Route exact path='/search' render={() => (
                    <Search books={this.state.books}
                            addToBooks={(book) => this.addToBooks(book)}
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
