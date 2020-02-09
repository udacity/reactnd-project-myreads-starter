import React, { Component } from 'react'
import { DebounceInput } from 'react-debounce-input'
import * as BooksAPI from './BooksAPI'
import ShelfBooks from './ShelfBooks'


class SearchMain extends Component {

    state = {
        books: [],
        badTerms: []
    }

    runSearch(event) {
        console.log(event.target.value)

        let query = event.target.value

        BooksAPI.search(query).then((books) => {
            if (books && books.length > 0) {
                let foundBooks = books.filter((book) => (book.imageLinks && book.imageLinks.thumbnail))
                this.setState({ books: foundBooks, badTerms: [] })
                console.log(foundBooks)
            }

        })



    }

    render() {
        let { changeShelf } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
                        <DebounceInput type="text" placeholder="Search by title or author" onChange={evt => this.runSearch(evt)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ShelfBooks
                        bookList={this.state.books}
                        changeShelf={changeShelf}
                    />
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }

}

export default SearchMain