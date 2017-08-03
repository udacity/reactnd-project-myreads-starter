import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route, Link} from 'react-router-dom';
import BookList from './components/BookList';
import Search from './components/Search'

class BooksApp extends React.Component {
    state = {}

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <BookList />
                )}/>
                <Route exact path="/search" render={() => (
                    <Search />
                )}/>
            </div>
        )
    }
}

export default BooksApp
