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
                            books
                        }
                    )
                )
            })
    }

    filterByShelf = () => {
        const books = []
        this.state.books.filter((book) =>{
            if(book.shelf === this.props.shelf){
                books.push(book)
    }      return books;
        })
        return books;
            }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.books !== prevState.books){
            BooksAPI.getAll()
                .then((books)=> {
                    this.setState(() => ({
                        books
                    }))
                })
        }
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
                    </ol>
                </div>
            </div>

        )
    }

}

export default Shelf;