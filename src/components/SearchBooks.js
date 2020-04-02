import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import bookPreloader from '../bookPreloader.gif';
import searchPreloader from '../searchPreloader.gif';
import PropTypes from 'prop-types';

class SearchBooks extends Component{

  componentWillUnmount = () => {

    //Calling handler to initialize/reset search results
    this.handleInputChange("");
  }

    //Initializing component state in class constructor
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    }
  }

  //Setting up prop types structure
  static propTypes = {
    searchedBooks: PropTypes.array.isRequired,
    booksInShelves: PropTypes.array.isRequired,
    movingBook: PropTypes.bool.isRequired,
    loadShelvesSpinner: PropTypes.object.isRequired,
    showSearchMessage: PropTypes.bool.isRequired,
    acceptedBookShelves: PropTypes.array.isRequired,

  }

   //Handling user input change for searching books as user types into field
  handleInputChange = (input_value) => {
    const searchTerm = input_value.trim();
    this.setState({ searchTerm: searchTerm });
    this.props.handleBookSearch(searchTerm);
  }

  //Handling user selection to move book from one shelf to another
  handleBookMove = (event, book) => {
    const targetShelf = event.target.value.trim();
    this.props.handleBookMove(targetShelf, book);
  }

  render() {
    
    //Destructuring props from parent component
    const { searchedBooks, booksInShelves, movingBook, loadShelvesSpinner, showSearchMessage, acceptedBookShelves } = this.props;

      return (
          <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to="/">
              Close
              </Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={(event) => this.handleInputChange(event.target.value)} />

            </div>
          </div>
          <div className="search-books-results">
            <div className="bookshelf-books">

              {/*** Loading Shelf spinner before API request completes */}
              {(loadShelvesSpinner['searchPage']) && (
                <div className="book-preloader">
                  <img src={bookPreloader} alt="Books Initial Loader" />
                </div>
              )}

              {/*** Showing no book message if this no book in current shelf after API request is completed */}
              {(!loadShelvesSpinner['searchPage'])
                && (!(searchedBooks && searchedBooks.length > 0) && this.state.searchTerm.length > 0 && showSearchMessage) && (
                  <div className="no-shelf-book-available alert alert-danger"><p>There are currently no books found for the search term</p></div>
                )
              }

              {/*** Loading all available books in shelf after API request is completed no book message if this no book in current shelf */}
              <ol className="books-grid">
                {(!loadShelvesSpinner['searchPage'] && searchedBooks && searchedBooks.length > 0) && (
                  searchedBooks
                    .map((book, book_key) => {
                      let shelvedBook = (booksInShelves && book && book.id && booksInShelves.length > 0) ? booksInShelves.filter((currentBook) => (currentBook.id === book.id)) : [];
                      shelvedBook = (shelvedBook.length > 0 && shelvedBook[0]) ? shelvedBook[0] : {};
                      return (
                        (book && book.id) && (
                          <li key={book_key}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ backgroundImage: `url(${(book.imageLinks && book.imageLinks.thumbnail) ? book.imageLinks.thumbnail : ''})` }}></div>
                                <div className="book-shelf-changer">
                                  <select onChange={(event) => this.handleBookMove(event, book)} defaultValue={`${(shelvedBook.shelf && acceptedBookShelves && acceptedBookShelves.length > 0 && acceptedBookShelves.includes(shelvedBook.shelf)) ? shelvedBook.shelf : 'none'}`} >
                                    <option value="move" disabled >Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{(book.title) ? book.title : ''}</div>
                              <div className="book-authors">{(book.authors && book.authors.length > 0) ? book.authors.join(", ") : ''}</div>
                              {(book.previewLink) && (
                                <div className="view-book">
                                  <a href={book.previewLink} target="_blank" rel="noopener noreferrer" className="view-book-link">View Book</a>
                                </div>
                              )}
                            </div>
                          </li>

                        )
                      );
                    })

                )}
              </ol>
              {/*** Loading Shelf spinner before API request completes for moving book */}
              {(movingBook) && (
                <div className="search-page-loader">
                  <img src={searchPreloader} alt="Books Move Loader" />
                </div>
              )}
            </div>
          </div>
        </div>
    

      );
  }
}

export default SearchBooks;