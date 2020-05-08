import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBooks: [],
            query: ''
        };
    }

componentDidMount() {
    this.setState({
        books: this.props.books
    })
}

updateQuery = (query) => {
    if (query === '') {
        this.setState(() => ({
            searchBooks: [],
            query: query.trim()
        }))
    } else {
    this.setState(() => ({
        query: query.trim()
    }), () => 
    BooksAPI.search(this.state.query)
    .then((newBooks) => 
    this.setState({
        searchBooks: newBooks
    })
    ))} 
    }

clearQuery = () => {
    this.updateQuery('')
    }

render() {

    const { query, searchBooks } = this.state
    const bookList = searchBooks !== [] ? searchBooks.map((booksMan, index) => {
    const noThumb = booksMan.imageLinks !== undefined ? booksMan.imageLinks.smallThumbnail : 'https://getuikit.com/v2/docs/images/placeholder_600x400.svg'
    const ifMultipleAuthors = booksMan.authors !== undefined ? booksMan.authors.length === 1 ? booksMan.authors : booksMan.authors.map((writers, index) => { return <div key={index}>{writers}</div> }) : null
    
    return (
        <li key={index}>
        <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${noThumb})` }}></div>
                <div className="book-shelf-changer">
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
        </div>
            <div className="book-title">{booksMan.title}</div>
            <div className="book-authors">{ifMultipleAuthors}</div>
        </div>
    </li>
    )
    
    }) : null
    return (
        <div className="search-books">
        <div className="search-books-bar">
            <Link to='/'>
            <button className="close-search" >Close</button>
            </Link>
            <div className="search-books-input-wrapper">
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
            */}
        <input
            className='search-contacts'
            type='text'
            placeholder='Search by Title or Author'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />

                    </div>
                </div>
                <div className="search-books-results">
        <ol className="books-grid">{bookList}</ol>
                </div>
                </div>
            )
        }
}