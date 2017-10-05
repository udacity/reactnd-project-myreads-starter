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
            books: [],
            results: []
        };

    }
    searchBooks = (e) => {
        const query = e.target.value.trim()
        BooksAPI.search(query, 40).then((results) => {
            if (results.length) {
                console.log(results)
                this.setState({results: results})
            }
            else {
                console.log('Error results')
            }
        }).catch((data) => {
            console.log('Unable to search "' + query + '"' + data);
        })
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
                    <SearchPage
                        onMoveBook={this.onMoveBook}
                        searchBooks={this.searchBooks}
                        results={this.state.results}
                    />
                )} />
                <Route exact path='/' render={() => (
                    <HomePage
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
