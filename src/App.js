import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import ListOfBooks from './components/ListOfBooks';
import SearchPage from './components/SearchPage';
class BooksApp extends React.Component {
    state = { books: [] };

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks = () => {
        BooksAPI.getAll().then((books) =>
            this.setState(() => ({
                books: books
            })));
    }

    onSwithcBookShelfOption = (bookToBeChanged, bookShelfCategory) => {
        BooksAPI.update(bookToBeChanged, bookShelfCategory).then(data => {
            bookToBeChanged.shelf = bookShelfCategory;

            this.setState(oldState => ({
                books: oldState.books.filter(book => book.id !== bookToBeChanged.id).concat(bookToBeChanged)
            }));
        });
    };

    render() {
        const { books } = this.state;
        return (
            <div className="app">
                <Route
                    path="/search"
                    render={() => (
                        <SearchPage books={books} switchShelfOption={this.onSwithcBookShelfOption} />
                    )}
                />
                <Route
                    exact
                    path="/"
                    render={() => (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>My Reads</h1>
                            </div>
                            <ListOfBooks books={books} switchShelfOption={this.onSwithcBookShelfOption} />
                            <div className="open-search">
                                <Link to="/search">
                                    <button>Add a Book</button></Link>
                            </div>
                        </div>
                    )}
                />
            </div>
        );
    }
}

export default BooksApp;
