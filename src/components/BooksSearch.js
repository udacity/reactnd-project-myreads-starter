import React from 'react'
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import Book from "./Book";
import 'react-notifications/lib/notifications.css';

class BooksSearch extends React.Component {
    state = {
        query: '',
        searchResults: []
    }
    updateQuery = query => {
        this.setState({
            'query': query.trim()
        })
        this.fetchBooks(query)
    }
    updateBooks = (books = []) => {
        this.setState({
            'searchResults': books
        })
    }
    fetchBooks = query => {
        BooksAPI.search(query)
            .then((response) => {
                if(response.error){
                    this.updateBooks()
                }
                else{
                    this.updateBooks(response)
                }
            })
            .catch((error) => {
                this.updateBooks()
            })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search" type="button">
                            Close
                        </button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.searchResults.length > 0 && (this.state.searchResults.map((book) => (
                                <li key={book.id}>
                                    <Book bookDetails={book} onUpdateShelf={this.props.updateShelf}/>
                                </li>
                            )))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BooksSearch;