import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {getAll, update} from "./BooksAPI";

import SearchPage from './components/SearchPage';
import Shelves from './components/Shelves';
import BookDetails from './components/BookDetails';

class BooksApp extends Component {
    state = {
        shelves: {}
    };

    changeBookShelf(book, shelf) {
        if (shelf === 'none' || shelf === book.shelf)
            return;

        update(book, shelf).then(() => {
            this.setState(({shelves}) => {
                let newShelves = Object.assign({}, shelves);
                newShelves[shelf].push(book);

                if(book.shelf)
                    newShelves[book.shelf] = newShelves[book.shelf].filter((b) => (b.id !== book.id));

                book.shelf = shelf;

                return {shelves: newShelves}
            });
        }, (error) => {
            console.error(error);
        });
    }

    componentDidMount() {
        getAll().then((books) => {
            let shelves = {};
            books.forEach((book) => {
                shelves[book.shelf] = shelves[book.shelf] || [];
                shelves[book.shelf].push(book);
            });

            this.setState({shelves});
        }, (error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <Shelves
                        shelves={this.state.shelves}
                        onChangeBookShelf={this.changeBookShelf.bind(this)}/>
                )}/>
                <Route path='/search' render={() => (
                    <SearchPage shelves={this.state.shelves} onChangeShelf={this.changeBookShelf.bind(this)}/>
                )}/>
                <Route path='/book/:id' component={BookDetails}/>
            </div>
        )
    }
}

export default BooksApp
