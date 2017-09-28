import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import LoadingGauge from './LoadingGauge';

class Bookshelf extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onChangeBook: PropTypes.func.isRequired
    };

    render() {
        const {id, books, onChangeBook} = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{id}</h2>
                {books.length <= 0 ? <LoadingGauge/> :
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.map((book) => (
                                <li key={book.id}>
                                    <Book book={book} onChangeShelf={onChangeBook}/>
                                </li>
                            ))}
                        </ol>
                    </div>}
            </div>
        );
    }
}

export default Bookshelf;
