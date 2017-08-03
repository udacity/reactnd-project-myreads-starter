import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route, Link} from 'react-router-dom';
import BookList from './components/BookList';
import Search from './components/Search'

class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState( {books} );
        });
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <BookList books={this.state.books} />
                )}/>
                <Route exact path="/search" render={() => (
                    <Search books={this.state.books} />
                )}/>
            </div>
        )
    }
}

export default BooksApp
