import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import escapeRegExpression from 'escape-string-regexp';
import sortBy from 'sort-by';
import ListSearchBooks from "./ListSearchBooks";

class Search extends Component{
    //Saving query as a state to retrieved matched books on the fly
    //The query will cause re-render which will update the UI by displaying only the books that matched the pattern
    state = {
        query: "",
        searchBooks: []
    };

    updateQuery = (e) => {
        this.setState({
            query: e.target.value
        });
    };

    render(){
        let showBooks = [];
        if(this.state.query){
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
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               value={this.state.query}
                               onChange={(event) => this.updateQuery(event)}/>

                    </div>
                </div>
                {/* Un-mount the component when there is no query */}
                {this.state.query &&
                <ListSearchBooks query={this.state.query}
                                 books={this.props.books}
                                 addToBooks={(book) => this.props.addToBooks(book)}
                                 addToCurrentlyReading={(book) => this.props.addToCurrentlyReading(book)}
                                 addToWantToRead={(book) => this.props.addToWantToRead(book)}
                                 addToRead={(book) => this.props.addToRead(book)}
                                 removeFromCurrentlyReading={(book) => this.props.removeFromCurrentlyReading(book)}
                                 removeFromWantToRead={(book) => this.props.removeFromWantToRead(book)}
                                 removeFromRead={(book) => this.props.removeFromRead(book)}
                                 updateBook={(book, shelf) => this.props.updateBook(book, shelf)}/>
                }
            </div>
        );
    }
}

export default Search;