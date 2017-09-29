import React from "react";
import "./App.css";
import HomePage from "./containers/HomePage";
import * as BooksAPI from "./BooksAPI";
import {Route} from "react-router-dom";


class BooksApp extends React.Component {
    constructor() {
        super();
        this.state = {
            books: []
        };

    }
    onMoveBook = (book, shelf) => {
        console.log(book, shelf)
        BooksAPI.update(book, shelf).then((bookId) =>{
            this.setState((prevState) => {
                return {books: prevState.books.map((findBook) => {
                    if (book.id === findBook.id) {
                      findBook.shelf = shelf
                    }
                    return findBook;
                })
                }
            })
        })
    }
    shelves = [
        {
            key: "currentlyReading",
            title: "Currently Reading"
        },
        {
            key: "wantToRead",
            title: "Want to Read"
        },
        {
            key: "read",
            title: "Read"
        }
    ]
    componentDidMount() {
        BooksAPI.getAll().then((result) => this.saveBooks(result))
    }

    saveBooks(books) {
        this.setState({ books})
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/search' render={() => (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                            <div className="search-books-input-wrapper">
                                <input type="text" placeholder="Search by title or author"/>
                            </div>
                        </div>
                        <div className="search-books-results">
                           <ol className="books-grid"></ol>
                        </div>
                    </div>
                )} />
                <Route exact path='/' render={() => (
                    <HomePage
                        shelves={this.shelves}
                        onMoveBook={this.onMoveBook}
                        books={this.state.books}
                    />
                )}
              />
            </div>
        )
    }

}

export default BooksApp
