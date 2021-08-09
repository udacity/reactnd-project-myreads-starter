import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchPage from './components/SearchPage';
import BookListing from './components/BooksListing';

class BooksApp extends Component {

    state = {
        books: []
    }
    componentDidMount() {
        this.getAllBooks()
    }

    getAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books: [books]
            }))
        })
    }

    onShelfOptionChange = (bookToChange, shelfCategory) => {
        BooksAPI.update(bookToChange, shelfCategory).then(() => {
            bookToChange.shelf = shelfCategory;

            this.setState((currentState) => ({
                books: currentState.books.filter((book) => book.id !== bookToChange.id).concat(bookToChange)
            }))
        })
    }

    render() {
        const { books } = this.state;
        console.log('Books', books)
        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <SearchPage
                        books={books}
                        onShelfOptionChange={this.onShelfOptionChange} />
                )} />

                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <BookListing
                            books={books}
                            onShelfOptionChange={this.onShelfOptionChange}
                        />
                        <div className="open-search">
                            <Link to='/search'>
                                <button>Add a book</button>
                            </Link>
                        </div>
                    </div>
                )} />
            </div>
        );
    }
}

export default BooksApp;