import React from 'react'
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const BooksList = props => {

    const shelves = [
        {
            'id': 'currentlyReading',
            'value': 'Currently Reading'
        },
        {
            'id': 'wantToRead',
            'value': 'Want to Read'
        },
        {
            'id': 'read',
            'value': 'Read'
        }
    ]
    const { filterBooks, updateShelf } = props

    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        shelves.map((shelf) => (
                            <BookShelf key={shelf.id} title={shelf.value} books={filterBooks(shelf.id)} onUpdateShelf={updateShelf}/>
                        ))
                    }
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    <button type="button">
                        Add a book
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default BooksList;