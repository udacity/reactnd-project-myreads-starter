import React, { Component } from "react";
import Book from "./Book.js";
import * as BooksAPI from './BooksAPI.js';


class Shelf extends Component{
    state={
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books)=>{
                this.setState(()=>({
                            books : this.filterByShelf(books)
                        }
                    )
                )
            })
    }

    filterByShelf = (arr) => {
        const books = []
        arr.filter((book) =>{
            if(book.shelf === this.props.shelf){
                books.push(book)
    }      return books;
        })
        return books;
            }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(this.state.books !== prevState.books){
    //         this.setState(()=>({
    //            books: this.filterByShelf(this.state.books)
    //         }))
    //         }
    //     }


    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.state.books.map((book)=>(
                            <Book key={book.id} book={book} />
                        ))
                        }
                    </ol>
                </div>
            </div>

        )
    }

}

export default Shelf;