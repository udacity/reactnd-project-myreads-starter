import React, { Component } from "react";
import Book from "./Book.js";


class Shelf extends Component{

    filterByShelf = () => {
        const books = []
        this.props.books.filter((book) =>{
            if(book.shelf === this.props.shelf){
                books.push(book)
    }      return books;
        })
        return books;
            }



    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.filterByShelf().map((book)=>(
                            <Book key={book.id} book={book}/>
                        ))
                        }
                        {console.log(this.filterByShelf())}


                    </ol>
                </div>
            </div>

        )
    }

}

export default Shelf;