import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';

class BookShelf extends Component {

    static propType = {
        shelfBooks: PropTypes.array.isRequired,
        bookShelves: PropTypes.array.isRequired
    }

    sort_by_title(x,y) {
        if (x.title < y.title)
        return -1;
        if (x.title > y.title)
            return 1;
        return 0;
    }

    render() {

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Bookshelf</h1>
                </div>
                <div className="list-books-content">
                {
                    this.props.bookShelves.map(shelf => {
                        return(
                            <div key={shelf.value} className="bookshelf">
                                <h2 className="bookshelf-title">{shelf.label}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.props.shelfBooks.sort(this.sort_by_title)
                                            .filter(book => book.shelf === shelf.value)
                                            .map(book => (
                                                <Book
                                                key={book.id}
                                                book={book}
                                                />
                                            ))
                                        }
                                    </ol>
                                </div>
                            </div> 
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default BookShelf;