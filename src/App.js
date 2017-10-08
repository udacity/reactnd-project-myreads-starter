import React from "react"
import "./App.css"
import HomePage from "./containers/HomePage"
import SearchPage from "./containers/SearchPage"
import * as BooksAPI from "./BooksAPI"
import {  BrowserRouter as Router, Route} from "react-router-dom"


export function updateBooks(books, book) {
    books.map((findBook) => {
        if (book.id === findBook.id) {
            findBook.shelf = book.shelf
        }
        return findBook
    })
    return books
}

export function pushBook(books, book) {
    let bookInShelf = books.find((prevBook) => prevBook.id === book.id)
    if (bookInShelf === undefined) {
        books.push(book)
    }
    return books
}

class BooksApp extends React.Component {
    constructor() {
        super()
        this.state = {
            books: [],
            results: []
        }

    }
    searchBooks = (e) => {
        const query = e.target.value.trim()
        console.log('fazendo pesquisa')
        BooksAPI.search(query, 40).then((results) => {
            if (results.length) {
                this.setState((prevState) => {
                    return {
                        results: results.map((resultBook) => {
                                let bookInShelf =  this.state.books.find((bookInShelf) => resultBook.id === bookInShelf.id)
                                resultBook.shelf = bookInShelf ? bookInShelf.shelf : 'none'
                                return resultBook
                            },
                        )
                    }
                })
            }
            else {
                console.log('Error results')
            }
        }).catch((data) => {
            console.log('Unable to search "' + query + '"' + data)
        })
    }
    onMoveBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then((bookId) =>{
            this.setState((prevState) => {
                book.shelf = shelf
                pushBook(prevState.books, book)
                return {
                    books: updateBooks(prevState.books, book, shelf),
                    results: updateBooks(prevState.results, book, shelf)
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
            <Router>
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
            </Router>
        )
    }

}

export default BooksApp