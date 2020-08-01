import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BooksDashboard from './components/BooksDashboard'
import SearchDashboard from './components/SearchDashboard'
import './App.css'

class BooksApp extends React.Component {
    state = {
        book_records: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((results) => {this.handleBookRecords(results);})
    }

    handleBookRecords = (record, update=false) => {
        if (update){
            this.setState((state) => ({
                    book_records: [...state.book_records.filter((b) => b.id !== record.id), record]
                })
            )
        } else {
            this.setState(() => ({book_records: record}))
        }

    };

    filterShelfBooks = (shelf) => {
        return this.state.book_records.filter((book) => book.shelf === shelf);
    };

    handleShelfUpdate = (book, updatedShelf) => {
        book.shelf = updatedShelf;
        BooksAPI.update(book, updatedShelf)
            .then((response) => {
                if (!response.error) {
                    this.handleBookRecords(book, true)
                }
            })
    };

    render() {
        return (
            <div className="app">
                <Route
                    path='/search'
                    render={() => (
                        <SearchDashboard handleShelfUpdate={this.handleShelfUpdate} books={this.state.book_records} />
                    )}
                />
                <Route
                    exact path='/'
                    render={() => (
                        <BooksDashboard
                            filterShelfBooks={this.filterShelfBooks}
                            handleShelfUpdate={this.handleShelfUpdate}
                        />
                    )}
                />
            </div>
        )

    }
}

export default BooksApp
