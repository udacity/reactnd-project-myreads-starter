import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import BookList from './components/BookList';
import Search from './components/Search';

class BooksApp extends React.Component {
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
