import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from "./Shelf";

class BooksApp extends React.Component {
    state = {
        shelfs: [{
            title: "Loading", books: []
        }]
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            const shelfs = books.reduce((shelfs, book) => {
                const url = book.imageLinks ? book.imageLinks.smallThumbnail : "https://via.placeholder.com/128x193";
                const bookInfo = {
                    title: book.title,
                    author: book.authors.join(""),
                    url
                };
                if (shelfs[book.shelf]) {
                    shelfs[book.shelf].books.push(bookInfo);
                } else {
                    const books = [];
                    books.push(bookInfo);
                    shelfs[book.shelf] = {
                        title: book.shelf,
                        books
                    };
                }
                return shelfs;
            }, []);
            this.setState({ shelfs: Object.values(shelfs) });
        });
    }

    render() {
        const { shelfs } = this.state;
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            {shelfs.map(shelf => {
                                return <Shelf key={shelf.title} title={shelf.title} books={shelf.books}/>
                            })}
                        </div>
                    </div>
                    <div className="open-search">
                        <a onClick={() => this.setState({showSearchPage: true})}>Add a book</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksApp
