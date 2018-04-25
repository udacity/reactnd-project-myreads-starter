import React from 'react';
import {Link, Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import Search from './Search';

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        //TODO: Make a state for each component separately and use that state as the default value for that component
        //TODO: Search Books
        books: [],
        currentlyReading: [],
        wantToRead: [],
        read: []
    };

    addToCurrentlyReading = (book) => {
        this.setState((state) => ({
            currentlyReading: state.currentlyReading.concat([book])
        }));
        console.log("New currently Reading books:")
        this.state.currentlyReading.map(book => console.log(book.title));
    };

    addToWantToRead = (book) => {
        this.setState((state) => ({
            wantToRead: state.wantToRead.concat([book])
        }))
        console.log("New want to read books:")
        this.state.wantToRead.map(book => console.log(book.title));
    };

    addToRead = (book) => {
        this.setState((state) => ({
            read: state.read.concat([book])
        }))
        console.log("New read books:")
        this.state.read.map(book => console.log(book.title));
    };

    removeFromCurrentlyReading = (book) => {
        this.setState((state) => ({
            currentlyReading: state.currentlyReading.filter(cBook => cBook !== book)
        }))
    };

    removeFromWantToRead = (book) => {
        this.setState((state) => ({
            wantToRead: state.wantToRead.filter(cBook => cBook !== book)
        }))
    };

    removeFromRead = (book) => {
        this.setState((state) => ({
            read: state.read.filter(cBook => cBook !== book)
        }))
    };


    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            });
            //categorizing the books pulled from the server
            books.map((book) => {
                console.log(book);
                if (book.shelf === "currentlyReading") {
                    this.setState({
                        currentlyReading: this.state.currentlyReading.concat([book])
                    });
                }
                if (book.shelf === "wantToRead") {
                    this.setState({
                        wantToRead: this.state.wantToRead.concat([book])
                    });
                }
                if (book.shelf === "read") {
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
                <Route path='/search' component={Search}/>
                <Route path='/' render={() => (
                    <ListBooks currentlyReading={this.state.currentlyReading}
                               wantToRead={this.state.wantToRead}
                               read={this.state.read}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
