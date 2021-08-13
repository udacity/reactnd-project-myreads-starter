import React, {Component} from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI.js';
import Book from "./Book";
// import Shelf from "./Shelf";


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

    clearQuery = () => {
        this.updateQuery('')
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
                    this.setState(() => ({
                        books : books
                    }))
                })
        }
    }


    render() {
        const {query, books} = this.state

//adds a key of shelf for objects without it, defaults shelf value to "none"
        if(books && books.length > 0) {
            books.forEach((book) => {
                if (!book.shelf) {
                    book["shelf"] = "none";
                    console.log(book.title, "is on", book.shelf)
                } else {
                    console.log(book.title, "is on", book.shelf)
                }
            })
        }

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
                {/*//results only return if books array is defined and has a length greater than 1, displays a phrase otherwise */}
            </div>
            <div className="search-books-results">
                { books && books.length > 0 ? (
                <ol className="books-grid">
                    {books.map((book)=>(
                        <Book key={book.id} book={book}/>))
                    }
                </ol>) : (
                    <p><em>No Books To Show...</em></p>)}
            </div>
        </div>
        )
    }

        }




export default SearchBooks;