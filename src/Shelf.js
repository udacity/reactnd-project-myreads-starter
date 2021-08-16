import React, { Component } from "react";
import Book from "./Book.js";
import * as BooksAPI from './BooksAPI.js';


class Shelf extends Component{
    //
    // handleMove = (book) => {
    //     this.props.books.concat(book);
    //
    //     this.setState((prevState)=>({
    //         [book.shelf]: [...prevState.book.shelf, book]
    //         })
    //     )
    // }

    render() {
        const {books} = this.props

        if (books) {

            return (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.map((book) => (
                                <Book key={book.id} book={book} onMove={this.props.onMove}/>
                            ))
                            }
                        </ol>
                    </div>
                </div>

            )
        }
    }

}

export default Shelf;