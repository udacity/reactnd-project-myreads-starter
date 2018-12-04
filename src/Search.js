import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }

    state = {
        searched: [],
        //query: ''
    }

    searchBooks = (query) => {  

        if(query.trim().length > 0){

            BooksAPI.search(query).
            then((searched) => {
                console.log(searched)
                this.setState(() => ({
                    searched
                }))
        
            })

        }else{
            this.setState(() => ({
                searched : []
            }))
        } 
        
    }

    render() {

        const { onUpdateShelf, books } = this.props

        const results = this.state.searched;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className='close-search'
                        to='/'>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">

                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={(event) => this.searchBooks(event.target.value)}
                            />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    { results.length > 0 && 
                    results.map((book) => (
                        <li key = {book.id} >
                            <div className="book">
                                <div className="book-top">
                                    {
                                        book.imageLinks !== undefined ?
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url( ' + book.imageLinks.thumbnail + ')' }}></div>
                                        : <div className="book-cover" style={{ width: 128, height: 193, background: 'gray' }}></div>
                                    }
                                    <div className="book-shelf-changer">
                                    
                                    <select onChange = {(e) => onUpdateShelf(book, e.target.value)} value={ books.findIndex(x => x.id == book.id) >= 0 ? books[books.findIndex(x => x.id == book.id)].shelf : 'none'  }>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">
                                { 
                                    
                                    book.authors !== undefined && 
                                    book.authors.map((author, i) => (
                                        book.authors.length - 1  !== i ? author + ", " : author 
                                    ))
                                    
                                }
                                </div>
                                
                            </div>
                        </li>
                        )) 
                    } 
                    </ol>

                    {
                        results.error === "empty query" &&
                            <div className="no-results-div"> 
                                <p>No Results </p>
                            </div>
                        
                    }
                </div>
          </div>
        )
    }
}

export default Search