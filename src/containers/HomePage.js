import React, {Component} from "react";
import * as BooksAPI from "../BooksAPI";
import Bookshelf from "../components/Bookshelf";

class HomePage extends Component {
    state = {
        books: []
    }

    updateBookData(books) {
        this.setState({ books })
        console.log(books)
    }


    componentDidMount() {
        BooksAPI.getAll().then((result) => this.updateBookData(result))
    }
    render () {
        const currentReadingBooks = this.state.books.filter((book) => {
            return book.shelf === 'currentlyReading';
        });
        const wantToReadBooks = this.state.books.filter((book) => {
            return book.shelf === 'wantToRead';
        });
        const readBooks = this.state.books.filter((book) => {
            return book.shelf === 'read';
        });
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf shelfName="Currently Reading" books={currentReadingBooks}/>
                        <Bookshelf shelfName="Want to read" books={wantToReadBooks}/>
                        <Bookshelf shelfName="Read" books={readBooks}/>
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default HomePage