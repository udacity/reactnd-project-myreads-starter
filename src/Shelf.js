import React, { Component } from "react";
import Book from "./Book.js";
import * as BooksAPI from './BooksAPI.js';


class Shelf extends Component {

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(this.props !== prevProps){
    //         }
    //     }


    render() {
        const { shelf, title, books, onUpdateBook } = this.props

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">
                    {title}
                </h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book)=> (
                            <li key={book.id}>
                            <Book book={book} shelf={shelf} key={book.id}
                                  onUpdateBook={onUpdateBook}/>
                            </li>
                        ))}

                    </ol>
                </div>

            </div>
        )

    }
}


export default Shelf;