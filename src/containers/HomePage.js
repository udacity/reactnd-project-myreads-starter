import React, {Component} from "react";
import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";
import PropTypes from 'prop-types'


class HomePage extends Component {
    static propTypes = {
        onMoveBook: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    };

    getShelfBooks(key) {
        return this.props.books.filter((book) => {
            return book.shelf === key;
        })
    }
    shelves = [
        {
            key: "currentlyReading",
            title: "Currently Reading"
        },
        {
            key: "wantToRead",
            title: "Want to Read"
        },
        {
            key: "read",
            title: "Read"
        }
    ]

    render () {

        const onMoveBook = this.props.onMoveBook
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.shelves.map(shelf => (
                            <Bookshelf key={shelf.key}
                                       shelfName={shelf.title}
                                       books={this.getShelfBooks(shelf.key)}
                                       onMoveBook={onMoveBook}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }


}

export default HomePage