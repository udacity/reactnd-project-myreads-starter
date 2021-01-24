import React from 'react'
import {Route} from 'react-router-dom';
import './App.css'
import BooksSearch from "./components/BooksSearch";
import BooksList from "./components/BooksList";
import {NotificationContainer, NotificationManager} from 'react-notifications'
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {

    state = {
        library: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                'library': books
            })
        }).catch((error) => {
            NotificationManager.error(error)
        })
    }

    filterBooks = shelf => {
        return this.state.library.filter((book) => (
            book.shelf === shelf
        ))
    }

    updateShelf = (event, book) => {
        const newShelf = event.target.value
        BooksAPI.update(book, newShelf).then((data) => {
            NotificationManager.info(
                `"${book.title}" moved to ${newShelf}`)
            book.shelf = newShelf
            this.setState((currentState) => ({
                'allBooks': currentState.library.filter(b => b.id !== book.id).concat([book])
            }))
        }).catch((error) => {
            NotificationManager.error(error)
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <BooksList
                        filterBooks={this.filterBooks}
                        updateShelf={this.updateShelf}
                    />
                )}/>
                <Route path='/search' render={({history}) => (
                    <BooksSearch
                        library={this.state.library}
                        updateShelf={this.updateShelf}
                    />
                )}/>
                <NotificationContainer/>
            </div>
        )
    }
}

export default BooksApp
