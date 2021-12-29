import React, { Component } from 'react'
import { DebounceInput } from 'react-debounce-input';
import { Link } from "react-router-dom";
import Book from './Book';
import * as BooksAPI from '../BooksAPI'
import PageLayout from './PageLayout'

class SearchPage extends Component {
    state = { booksFound: [], query: "", allBooks: [] }

    getBooks(query) {
        if (query !== "") {
            return BooksAPI.search(query).then(books => this.setState({ booksFound: books, query: query.trimStart() }))
        }
        return this.setState({ query: query.trimStart(), booksFound: [] })
    }

    render() {
        const { query } = this.state

        return (
            <PageLayout>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/"><button className="close-search">Close</button></Link>
                        <div className="search-books-input-wrapper">
                            <DebounceInput
                                type="text"
                                minLength={0}
                                debounceTimeout={300}
                                onChange={(event) => this.getBooks(event.target.value)}
                                placeholder="Search by title or author"
                                value={query} />
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {
                                this.state.booksFound.length > 0
                                    ? this.state.booksFound.map(b => <li key={b.id}><Book book={b} allBooks={this.props.allBooks} updadeShelf={this.props.updadeShelf} /></li>)
                                    : <div></div>
                            }
                        </ol>
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default SearchPage;