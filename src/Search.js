import React from 'react';
import { Link } from 'react-router-dom';
import { search } from './BooksAPI';
import Bookshelf from './Bookshelf'
import { update, getAll } from './BooksAPI';

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
        let allBooks = await getAll();
        query && await search(query)
            .then( results => {
                if (query === this.state.query) {
                    let newResults;
                    if (results.length > 0) {
                        newResults = results.map(result => {
                            let newResult = result;
                            let book = allBooks.find(book => {
                                return book.id === result.id
                            })
                            if (book && book.shelf){
                                newResult.shelf = book.shelf
                            }
                            return newResult
                        })
                    }
                    this.setState({
                        bookResults:  newResults
                    });
                }
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