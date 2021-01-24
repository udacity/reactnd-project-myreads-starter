import React from 'react'
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const BooksList = props => {

    const titles = {
        'currentlyReading': 'Currently Reading',
        'wantToRead': 'Want to Read',
        'read': 'Read',
        'none': 'Removed'
    }
    const shelves = [
        'currentlyReading',
        'wantToRead',
        'read'
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
                            <BookShelf key={shelf} title={titles[shelf]} books={filterBooks(shelf)} onUpdateShelf={updateShelf}/>
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