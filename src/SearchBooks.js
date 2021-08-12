import React, {Component} from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI.js';
import Book from "./Book";


class SearchBooks extends Component{
    state={
        query: ''
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            query: event.target.value
        })
        this.searchBooks();
    }

    searchBooks = () => {
        let showBooks = []
       if(this.state.query === ''){
        showBooks = this.props.books
           return showBooks
       } else {
           BooksAPI.search(this.state.query)
               .then((books) => {
                   showBooks = books
               })
           return showBooks
       }
    }




    render() {
        const {query} = this.state
        const {books} = this.props

        return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' >
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
                        value={this.state.query}
                        onChange={this.handleChange}

                    />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {books.map((book)=>
                        <Book book={book} key={book.id}/>
                    )
                    }
                </ol>

            </div>
        </div>
        )
    }
}

export default SearchBooks;