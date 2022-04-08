import React  from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Book from "./Book";

const BookSearch = (props) => {

    const { bookList, query, foundBooks, onUpdateQuery, onShelfChange} = props

    const foundBookIds = foundBooks.map(foundBook => foundBook.id)
    console.log('Found Ids', foundBookIds)
    let booksOnShelf =
        bookList
            .filter(book => {
                return foundBooks.map(foundBook => foundBook.id).indexOf(book.id) > -1
            }
        );

    let booksNotOnShelf = foundBooks
        .filter(book => {return bookList.map(bookOnShelf => bookOnShelf.id).indexOf(book.id) < 0})
        .map(book => {return {...book, shelf: 'none'}})

    let searchResults = [...booksOnShelf, ...booksNotOnShelf]

    console.log('booksOnShelf', booksOnShelf)
    // console.log('booksNotOnShelf',booksNotOnShelf)
    // console.log('searchResults',searchResults)

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
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
                    value={query}
                    onChange={(e) => onUpdateQuery(e.target.value)}
                />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {foundBooks && query
                        ? searchResults.map((book) =>
                        <li key={book.id}>
                            <Book
                                book={book}
                                onShelfChange={onShelfChange}/>
                        </li>
                    )
                        : <li />
                    }
                </ol>
            </div>
        </div>
    )
}

export default BookSearch