import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI';
import Books from "./Books";
import noBookImage from '../imgs/1200px-No-Image-Placeholder.png';
class SearchPage extends Component {
    state = {
        searchQuery: '',
        booksSearched: [],
        searchError: false
    };

    handleSearchBooksOnChange = (searchWord) => {
        this.setState(() => ({
            searchText: searchWord.trim()
        }))
        this.searchBooks(searchWord.trim());
        console.log('SEARCH BOOKS', this.state.booksSearched);
    }

    searchBooks = (searchQuery) => {
        if (searchQuery !== '') {
            BooksAPI.search(searchQuery).then((response) => {
                if ((typeof response !== 'object') || (typeof response !== 'undefined')) {
                    this.setState(() => ({
                        booksSearched: [response],
                        searchError: false
                    }))
                } else {
                    this.setState(() => ({
                        booksSearched: [],
                        errorsFound: true
                    }))
                }
            })
        }
    }

    render() {
        
        const { booksSearched, searchQuery, errorsFound } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            defaultValue={searchQuery}
                            onChange={(event) => this.handleSearchBooksOnChange(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    { booksSearched.length > 0 && <h3 style={{color: 'blue'}}>Total Books found: <span style={{color: 'green'}}>{booksSearched.length}</span></h3>}
                    <ol className="books-grid">
                        {
                            booksSearched.length > 0 ? booksSearched.map((book, index) =>
                                <li key={index} >
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover"
                                                style={{ width: 128, height: 174, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noBookImage})` }}></div>
                                            <div className="book-shelf-changer">
                                                <Books 
                                                    book={book} 
                                                    books={this.props.books}
                                                    key={book.id} 
                                                    onShelfOptionChange={this.props.onShelfOptionChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title ? book.title : 'No Title found'}</div>
                                        <div className="book-authors">{book.authors ? book.authors : 'No Author(s) found'}</div>
                                    </div>
                                </li>
                            ) : 
                            <div>
                                <p style={{color: 'red', fontSize: '16px'}}>No book found matching your search query {searchQuery.toUpperCase()}. Please try a different book title!</p>
                            </div>
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage;
