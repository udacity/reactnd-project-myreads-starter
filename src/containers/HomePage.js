import React, {Component} from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Bookshelf from "../components/Bookshelf";

class HomePage extends Component {
    state = {
        books: []
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
    getShelfBooks(key) {
        return this.state.books.filter((book) => {
            return book.shelf === key;
        })
    }
    onMoveBook(book, shelf) {
        BooksAPI.update(book, shelf)
    }
    loadBooks(books) {
      this.setState({ books})
    }
    componentDidMount() {
        BooksAPI.getAll().then((result) => this.loadBooks(result))
    }
    render () {

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
                                       onMoveBook={this.onMoveBook}
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