import React from 'react';
import { Link } from 'react-router-dom';
import { search } from './BooksAPI';
import Bookshelf from './Bookshelf'
import { update } from './BooksAPI';

class Search extends React.Component {
    state = {
        query: '',
        bookResults: []
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        });
    } 

    async onOptionChange (book, value) {
        console.log(book)
        console.log(value)
        update(book, value);
    }

    async callResults(query) {
        this.updateQuery(query);
        query && await search(query)
            .then( results => {
                this.setState({
                    bookResults:  results
                });
            });
        if (!query) {
            this.setState({
                bookResults: []
            });
        }

        console.log(query);
    }

    render() {
        const {query, bookResults} = this.state;

        return(
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
                            onChange={(event) => this.callResults(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <Bookshelf
                        bookshelfTitle="Search Results"
                        books={bookResults}
                        onOptionChange={this.onOptionChange}
                    />
                </div>
            </div>
        );
    }

}

export default Search;