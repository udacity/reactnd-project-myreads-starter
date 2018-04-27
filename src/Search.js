import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import escapeRegExpression from 'escape-string-regexp';
import sortBy from 'sort-by';
import * as BooksAPI from "./BooksAPI";

class Search extends Component{
    CURRENTLY_READING_SHELF = "currentlyReading";
    WANT_TO_READ_SHELF = "wantToRead";
    READ_SHELF = "read";

    //Saving query as a state to retrieved matched books on the fly
    //The query will cause re-render which will update the UI by displaying only the books that matched the pattern
    state = {
        query: ""
    };

    updateQuery = (e) => {
        this.setState({
            query: e.target.value
        });
    };

    updateBookShelf(e, book) {
        console.log(" Current shelf " + book.shelf + " New shelf", e.target.value);
        //update the book
        //insert book to a new bookshelf
        //remove book from the old bookshelf
        const oldBookShelf = book.shelf;
        const newBookShelf = e.target.value;
        switch (newBookShelf) {
            case this.CURRENTLY_READING_SHELF:
                this.props.updateBookShelf(book, this.CURRENTLY_READING_SHELF);
                this.props.addToCurrentlyReading(book);
                BooksAPI.update(book, this.CURRENTLY_READING_SHELF);
                this.removeFromShelf(book, oldBookShelf);
                break;
            case this.WANT_TO_READ_SHELF:
                this.props.updateBookShelf(book, this.WANT_TO_READ_SHELF);
                this.props.addToWantToRead(book);
                BooksAPI.update(book, this.WANT_TO_READ_SHELF);
                this.removeFromShelf(book, oldBookShelf);
                break;
            case this.READ_SHELF:
                this.props.updateBookShelf(book, this.READ_SHELF);
                this.props.addToRead(book);
                BooksAPI.update(book, this.READ_SHELF);
                this.removeFromShelf(book, oldBookShelf);
                break;
            default:
                break;
        }
    }

    removeFromShelf = (book, shelf) => {
      switch(shelf){
          case this.CURRENTLY_READING_SHELF:
              this.props.removeFromCurrentlyReading(book);
              break;
          case this.WANT_TO_READ_SHELF:
              this.props.removeFromWantToRead(book);
              break;
          case this.READ_SHELF:
              this.props.removeFromRead(book);
              break;
          default:
              break;
      }
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
                    {`Hello ${this.state.query}`}
                    <ol className="books-grid">
                        {showBooks.map((book) => (
                            <li key={book.title}>
                                <div className="book">
                                    <div className="book-top">
                                        {book.imageLinks.smallThumbnail && (
                                            <div className="book-cover" style={{
                                                width: 128,
                                                height: 193,
                                                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                            }}/>
                                        )}
                                        <div className="book-shelf-changer">
                                            <select value={book.shelf}
                                                    onChange={(event) => this.updateBookShelf(event, book)}>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading
                                                </option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors[0]}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;