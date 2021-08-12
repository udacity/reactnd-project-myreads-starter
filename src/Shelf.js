import React, { Component } from "react";
import Book from "./Book.js";
import * as BooksAPI from './BooksAPI';


class Shelf extends Component{

    filterByShelf = () => {
        const books = []
        this.props.books.filter((book) =>{
            if(book.shelf === this.props.shelf){
                books.push(book)
    }
        })
        return books;
            }

    render() {

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.filterByShelf().map((book)=>(
                            <Book key={book.id} book={book}/>
                        ))
                        }

                    </ol>
                </div>
            </div>

        )
    }

}

export default Shelf;