import React from 'react';
import Book from './Book';

const BookShelf = (props) => {

    const handleUpdate = (book, shelf) => {
        props.handleUpdate(book, shelf);
      }

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {
                    props.books.map( (book, index) => (
                        <li key={index}>
                            <Book
                                title={book.title}
                                authors={book.authors}
                                url={book.imageLinks}
                                book={book}
                                handleUpdate={handleUpdate}
                            />
                        </li>
                    ))
                }
                </ol>
            </div>
        </div>
    );
}

export default BookShelf;