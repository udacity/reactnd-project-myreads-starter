import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Shelf from '../components/Shelf';

class Bookshelf extends Component {

    constructor(props) {
        super(props);

        this.state= {
            currentlyReading: [],
            wantToRead: [],
            read: []
        };
    }


    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
        this.refreshBookList();
    };

    //on initial load, add all books from API and filter them to their respective shelf
    componentDidMount() {
        this.refreshBookList();
    }

    refreshBookList = () => {
        BooksAPI.getAll().then((books) => {

            const currentlyReading = books.filter((book) => {
                return book.shelf === "currentlyReading";
            });

            const wantToRead = books.filter((book) => {
                return book.shelf === "wantToRead";
            });

            const read = books.filter((book) => {
                return book.shelf === "read";
            });

            this.setState({currentlyReading});
            this.setState({wantToRead});
            this.setState({read});
        });
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf
                        books = {this.state.currentlyReading}
                        shelfName = "Currently Reading"
                        />
                        <Shelf
                            books = {this.state.wantToRead}
                            shelfName = "Want To Read"
                        />
                        <Shelf
                            books = {this.state.read}
                            shelfName = "Read"
                        />
                    </div>
                </div>

                <Link
                to="/search"
                className="open-search"
                >Find a book</Link>
                </div>
        )
    }
}

export default Bookshelf;