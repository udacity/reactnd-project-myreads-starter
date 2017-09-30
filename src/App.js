import React from "react";
import "./App.css";
import HomePage from "./containers/HomePage";
import SearchPage from "./containers/SearchPage";
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
                    <SearchPage/>
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
