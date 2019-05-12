import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book.js'
import { search } from '../BooksAPI.js'
import debounce from 'lodash.debounce'

class Search extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.searchWithDebounce = debounce(this.doSearch, 500)
    }

    state = {
        results: [],
        query: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value })
        this.searchWithDebounce(e.target.value)
    }

    doSearch = (val) => {
        if (val === '') {
            this.setState({
                results: []
            })
            return
        }

        search(val).then((results) => {
            this.setState({
                results: this.updateShelf(results)
            })
        })
    }

    // Apply a shelf property to the books returned by search
    updateShelf = (results) => {
        if (results && results.hasOwnProperty('error')) {
            return []
        }

        const { books } = this.props

        // Map shelf properties to each book in search results
        const mapped = results.map((bookOnShelf) => {
            const match = books.find((book) => book.id === bookOnShelf.id)
            const bookOnShelf_copy = Object.assign({}, bookOnShelf, { shelf: match ? match.shelf : 'none' })
            return bookOnShelf_copy
        })

        return mapped
    }

    // Sometimes the results contain an error property: "empty query"
    hasResults = () => {
        return this.state.results && !this.state.results.hasOwnProperty('error')
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
            */}
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={this.handleChange}
                            />
                        </form>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.hasResults() &&
                            this.state.results.map((book) => (
                                <li key={book.id}>
                                    <Book book={book} updateShelf={this.props.updateShelf} />
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
}

export default Search
