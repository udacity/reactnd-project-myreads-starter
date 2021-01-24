import React from 'react'
import Book from "./Book";

class BookShelf extends React.Component {
    render() {
        const { title, books, onUpdateShelf } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.length > 0 && (books.map((book) => (
                                <li key={book.id}>
                                    <Book bookDetails={book} onUpdateShelf={onUpdateShelf}/>
                                </li>
                            )))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;