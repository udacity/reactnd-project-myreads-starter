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
            }
        }

        if(!isPresent){
            this.setState((state) => ({
                books: state.books.concat([book])
            }));
        }

    };

    addToCurrentlyReading = (book) => {
        this.setState((state) => ({
            currentlyReading: state.currentlyReading.concat([book])
        }));
    };

    addToWantToRead = (book) => {
        this.setState((state) => ({
            wantToRead: state.wantToRead.concat([book])
        }));
    };

    addToRead = (book) => {
        this.setState((state) => ({
            read: state.read.concat([book])
        }));
    };

    removeFromCurrentlyReading = (book) => {
        this.setState((state) => ({
            currentlyReading: state.currentlyReading.filter(cBook => cBook.title !== book.title)
        }))
    };

    removeFromWantToRead = (book) => {
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
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            });
            //categorizing the books pulled from the server
            books.map((book) => {
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
