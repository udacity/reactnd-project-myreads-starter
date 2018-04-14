import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // TODO: Have an array of different states for different categories and categorized the books
    // TODO: Accoriding to their categories
      showSearchPage: false,
      books: []
  };

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState({books: books})

          books.map((book) => {
              console.log(book);
          })
      });
  }


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (


          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ol>
                {this.state.books.map((book) =>
                    <li key = {book.title}>
                        <div>{book.title}</div>
                        {book.shelf === "currentlyReading" && (

                            <div className="list-books-content">
                                <div>
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">Currently Reading</h2>
                                        <div className="bookshelf-books">
                                            <ol className="books-grid">
                                                <li>
                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}/>
                                                            <div className="book-shelf-changer">
                                                                <select>
                                                                    <option value="none" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading</option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title">To Kill a Mockingbird</div>
                                                        <div className="book-authors">Harper Lee</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
                                                            <div className="book-shelf-changer">
                                                                <select>
                                                                    <option value="none" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading</option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title">Ender's Game</div>
                                                        <div className="book-authors">Orson Scott Card</div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                )}
            </ol>



            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
