import React, {Component} from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI.js';
import Book from "./Book";
import Shelf from "./Shelf";


class SearchBooks extends Component{
    state={
        query: '',
        books: [],
    }

    updateQuery=(event)=>{
        event.preventDefault();
        this.setState({
            query: event.target.value
        })

    }

    ComponentDidMount(){
            BooksAPI.getAll()
                .then((books) => {
                    this.setState(() => ({
                        books : books
                    }))
                })

    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.query !== prevState.query){
            BooksAPI.search(this.state.query)
                .then((books) => {
                    console.log("here is books inside of componeentDidUPdate", books)
                    this.setState(() => ({
                        books : books
                    }))
                })
        }
    }

    // searchBooks=()=>{
    //  BooksAPI.search(this.state.query)
    //         .then((books) => {
    //             this.setState(() => ({
    //                 books : books
    //             }))
    //         })
    // }



    render() {
        const {query, books} = this.state

        return(
        <div className="search-books">
            <div className="search-books-bar">

                <Link to='/' >
                <button className="close-search">Close</button>
                </Link>

                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={this.updateQuery}

                    />
                </div>

            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {console.log(books)}
                    {books.map((book)=>(
                        <Book key={book.id} book={book}/>))
                    }

                </ol>

            </div>
        </div>
        )
    }
}

export default SearchBooks;