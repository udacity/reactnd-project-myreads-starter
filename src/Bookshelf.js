import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {
    render() {
        const { bookshelfTitle, books } = this.props;

        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{bookshelfTitle}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books && books.length > 0 && books.map(book => {
                                return (
                                    <li key={`${book.title}_${book.id}`}>
                                        <Book
                                            book={book}
                                            onOptionChange={(book, value) => this.props.onOptionChange(book, value)}
                                        />
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
};

export default Bookshelf;