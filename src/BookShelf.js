import React  from 'react'
import './App.css'
import Book from './Book'

const BookShelf = props => {

    const { booksOnShelf, onShelfChange } = props;

    return (
        <div className="bookshelf">
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {booksOnShelf &&
                        booksOnShelf.map((book) => {
                            return (
                                <li key={book.id}>
                                    <Book
                                        book={book}
                                        onShelfChange={onShelfChange} />
                                </li>
                            )})
                    }
                </ol>
            </div>
        </div>
    )
}

export default BookShelf