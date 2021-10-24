import React, { Component } from 'react';
import ShelfSelector from './ShelfSelector';

export class Book extends Component {
    render() {
        const { books, onBookMoved } = this.props;

        if (books !== undefined && books.length > 0) {
            return (
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id} className="book-list-item">
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}/>
                                        <ShelfSelector
                                            book={book}
                                            onBookMoved={onBookMoved} />
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default Book;