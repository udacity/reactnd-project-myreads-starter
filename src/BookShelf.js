import React  from 'react'
import './App.css'
import Book from './Book'

const BookShelf = (props) => {

    const { booksOnShelf } = props;

    return (
        <div className="bookshelf">
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {booksOnShelf &&
                        booksOnShelf.map((book) => {
                            return (
                                <li key={book.id}>
                                    <Book book={book} />
                                </li>
                            )})
                    }
                </ol>
            </div>
        </div>
    )
}

export default BookShelf