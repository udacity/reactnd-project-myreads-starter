import React , { Component } from 'react';
import { Link } from "react-router-dom";
import { Debounce } from "react-throttle";
import Book from './Book';

class SearchPage extends React.Component {

  componentWillUnmount(){
    this.props.searchQuery("");
}
    render() {
        return (
          <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <Debounce time="600" handler="onChange">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={(event) => this.props.searchQuery(event.target.value)}
                            />
                        </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id} className="book-list-item">
                                <Book
                                    book={book}
                                    changeBookShelf={this.props.changeBookShelf} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }

}
export default SearchPage;