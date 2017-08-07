import React from 'react'
import Book from './Book'

function Shelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book, index) => (
                        (book.shelf === props.id) && (
                            <Book
                                key={book.title}
                                imageURL={book.imageLinks.thumbnail}
                                author={book.authors[0]}
                                title={book.title}
                            />
                        )
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Shelf