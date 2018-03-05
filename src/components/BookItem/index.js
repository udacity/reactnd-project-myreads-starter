import React, {Component} from "react";
import PropTypes from 'prop-types';

class BookItem extends Component {

    render() {
        this.state = {books: this.props.books};
        const {books} = this.state;
        return (
            <li key={books.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: '100%',
                            height: '100%'
                        }}></div>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="none" disabled>Move to...</option>
                                <option selected={books.shelf === 'currentlyReading'}
                                        value="currentlyReading">Currently
                                    Reading
                                </option>
                                <option selected={books.shelf === 'wantToRead'} value="wantToRead">Want to Read
                                </option>
                                <option selected={books.shelf === 'read'} value="read">Read</option>
                                <option selected={books.shelf === ''} value="none">None</option>
                            </select>
                        </div>
                    </div>

                    <div className="book-title">{books.title}</div>
                    <div className="book-authors">{books.authors}</div>
                </div>
            </li>
        )
    }
}

export default BookItem;