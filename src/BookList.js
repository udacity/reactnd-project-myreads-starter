import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'


const BookList = (props) => {

    const { bookList } = props;
    const bookShelves = [
        {'key':'currentlyReading', 'value': 'Currently Reading'},
        {'key':'wantToRead', 'value': 'Want to Read'},
        {'key':'read', 'value': 'Read'},
        {'key':'none', 'value': 'None'}
    ]

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {bookShelves.filter(shelf=> shelf.key !=="none").map(shelf =>
                    <div key={shelf.key} className={"bookshelf"}>
                    <h2 key={shelf.key} className="bookshelf-title">{shelf.value}</h2>
                    <BookShelf booksOnShelf={bookList.filter( book => book.shelf === shelf.key)}/>
                    </div>
                )}
            </div>

            <div className="open-search">
                <Link to="/search">
                    <button>Add a book</button>
                </Link>
            </div>

          </div>
    )
}

export default BookList