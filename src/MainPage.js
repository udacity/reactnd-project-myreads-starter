import React from 'react';
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI'
import { Link } from "react-router-dom";
import { update } from './BooksAPI';


class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            apiBooks: []
        }
        this.onOptionChange = this.onOptionChange.bind(this);
    }

    async onOptionChange (book, value) {
        await update(book, value);
        let apiBooks = await BooksAPI.getAll();
        this.setState({
          apiBooks
        });
      }

    async componentDidMount() {
        let apiBooks = await BooksAPI.getAll();
    
        this.setState({
          apiBooks
        });
    }

    getBooksByShelf = (books, bookshelfTitle) => {
        let filteredBooks = []
        books && books.forEach(book => {
            if (book.shelf === bookshelfTitle) {
                filteredBooks.push(book);
            }
        });

        return filteredBooks;
    }

    render() {
        const { apiBooks } = this.state;

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf 
                        bookshelfTitle={"Currently Reading"}
                        books={this.getBooksByShelf(apiBooks, "currentlyReading")}
                        onOptionChange={this.onOptionChange}
                    />
                    <Bookshelf 
                        bookshelfTitle={"Want To Read"}
                        books={this.getBooksByShelf(apiBooks, "wantToRead")}
                        onOptionChange={this.onOptionChange}
                    />
                    <Bookshelf 
                        bookshelfTitle={"Read"}
                        books={this.getBooksByShelf(apiBooks, "read")}
                        onOptionChange={this.onOptionChange}
                    />
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default MainPage;