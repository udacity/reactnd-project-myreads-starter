import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class SearchBooks extends Component {
state = {
    query: ''
}

updateQuery = (query) => {
    this.setState({ query: query.trim() })
}

render() { 
    const { books } = this.props;
    const { query } = this.state;

    let showingBooks = books.filter(book => book["authors"].join().includes(query) || book["title"].includes(query));

//console.log(showingBooks)
//(title.charAt(0).toLowerCase() + title.slice(1)).split(' ').join('');
    return ( 
        <div className="search-books">
            <div className="search-books-bar">
            <Link 
            to='/'
            className="close-search"
            >Close</Link>
            <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />
            </div>
            </div>
            {this.state.query && 
            <div className="search-books-results">
                <BookShelf 
                    title = "Currently Reading"
                    books={showingBooks.filter(book => book["shelf"] === "currentlyReading")}
                />
                <BookShelf 
                    title = "Want To Read"
                    books={showingBooks.filter(book => book["shelf"] === "wantToRead")}
                />
                <BookShelf 
                    title = "Read"
                    books={showingBooks.filter(book => book["shelf"] === "read")}
                />
            </div>}
        </div>
        );
    }
}
 
export default SearchBooks;