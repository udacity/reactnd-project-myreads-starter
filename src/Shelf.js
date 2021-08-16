import React, { Component } from "react";
import Book from "./Book.js";
import * as BooksAPI from './BooksAPI.js';


class Shelf extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps){
            console.log("shelf properties of books were updated")
            }
        }


    render() {
        const { shelf, title, books } = this.props

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">
                    {title}
                </h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book)=> (
                            <Book book={book} shelf={shelf} key={book.id}/>
                        ))}

                    </ol>
                </div>

            </div>
        )

    }
}


export default Shelf;