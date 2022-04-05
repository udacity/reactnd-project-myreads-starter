import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";


class BookSearch extends Component {

    state = {
        foundBooks: [],
        query: ""
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
        this.fetchBooks(this.state.query)
    }

    fetchBooks = (query) => {
        BooksAPI.search(query)
                .then(
                foundBooks => this.setState(
                    () => ({
                        foundBooks: foundBooks
                    })
                )
            )
    }

    render() {

        const { query, foundBooks } = this.state

        console.log(foundBooks)

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>

                    <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {foundBooks && foundBooks.map((book) =>
                            <li key={book.id}>
                                <Book book={book} />
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch