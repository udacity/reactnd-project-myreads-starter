import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import escapeRegExpression from 'escape-string-regexp';
import sortBy from 'sort-by';
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./SearchBooks";
import FooComponent from "./FooComponent";

class Search extends Component{
    CURRENTLY_READING_SHELF = "currentlyReading";
    WANT_TO_READ_SHELF = "wantToRead";
    READ_SHELF = "read";

    //Saving query as a state to retrieved matched books on the fly
    //The query will cause re-render which will update the UI by displaying only the books that matched the pattern
    state = {
        query: "android",
        searchBooks: []
    };

    updateQuery = (e) => {
        this.setState({
            query: e.target.value
        });
    };


    render(){
        let showBooks = [];
        if(this.state.query) {

            //Use reg expression to match the query against books.title
            //filter books that matches the expression
            const exp = new RegExp(escapeRegExpression(this.state.query), "i");
            showBooks = this.props.books.filter((book) =>
                book.title.match(exp)
            );
        }
        else{
            showBooks = this.props.books;
        }

        showBooks.sort(sortBy("title"));

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search"
                          to='/'>Close</Link>
                    {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                     */}
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               value={this.state.query}
                               onChange={(event) => this.updateQuery(event)}/>

                    </div>
                </div>
                <SearchBooks query = { this.state.query }
                             addToCurrentlyReading={(book) => this.props.addToCurrentlyReading(book)}
                             addToWantToRead={(book) => this.props.addToWantToRead(book)}
                             addToRead={(book) => this.props.addToRead(book)}
                             removeFromCurrentlyReading={(book) => this.props.removeFromCurrentlyReading(book)}
                             removeFromWantToRead={(book) => this.props.removeFromWantToRead(book)}
                             removeFromRead={(book) => this.props.removeFromRead(book)}
                             updateBook={(book, shelf) => this.props.updateBook(book, shelf)}/>
                {/*<FooComponent name={this.state.query}/>*/}
            </div>
        );
    }
}

export default Search;