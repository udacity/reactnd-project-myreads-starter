import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import escapeRegExpression from 'escape-string-regexp';
import sortBy from 'sort-by';

class Search extends Component{
    //Saving query as a state to retrieved matched books on the fly
    state = {
        query: ""
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
            //TODO: check for thumbnail in the filter condition
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
                <div className="search-books-results">
                    {this.state.query.toString()}
                    <ol className="books-grid">
                        {showBooks.map((book) => (
                            <li key={book.title} className="books-grid">
                                <div className="book-cover"
                                     style={{
                                         width: 128,
                                         height: 192,
                                         backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                     }}/>
                                <div className="book-title">{book.title + book.shelf}</div></li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;