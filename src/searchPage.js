import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
    state = {
        query: '',
        books: []
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        });
        (event.target.value)?
            BooksAPI.search(event.target.value, 10).then((books) => {
                if(books) {
                    this.setState({ books })
                }else {
                    this.setState({books: []})
            }})
        : this.setState({books: []})
    }

    render() {
        const {query, books} = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className="close-search"
                        >Close</Link>
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
                            onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {(books.length > 0) && (
                            books.map((book, index) => (
                                <Book
                                    key={index}
                                    imageURL={(book.imageLinks)? book.imageLinks.thumbnail : 'none'}
                                    author={(book.authors)? book.authors[0] : "Authorless"}
                                    title={book.title}
                                />
                            ))
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage