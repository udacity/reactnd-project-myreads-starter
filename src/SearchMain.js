import React, { Component } from 'react'
import { DebounceInput } from 'react-debounce-input'
import * as BooksAPI from './BooksAPI'
import ShelfBooks from './ShelfBooks'

import { Link } from 'react-router-dom'


class SearchMain extends Component {

    state = {
        books: [],
        badTerms: []
    }

    querryIsValid = false;
    allTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball',
        'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook',
        'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
        'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games',
        'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
        'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy',
        'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling',
        'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel',
        'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'];
    validator = this.allTerms.join(',').toLowerCase();

    getBadTerms(query) {
        let tokens = query.split(" ");
        let terms = [];
        tokens.forEach(element => {

            if (!this.validator.includes(element.toLowerCase())) {
                terms.push(element)
            }
        });
        return terms;
    }

    runSearch(event) {

        let query = event.target.value
        query = query.trim()
        if (query === '') {
            this.setState({ books: [] })
            return
        }

        let badTerms = this.getBadTerms(query);


        if (badTerms.length < 1) {
            BooksAPI.search(query).then((books) => {
                if (books && books.length > 0) {
                    let foundBooks = books.filter((book) => (book.imageLinks && book.imageLinks.thumbnail))
                    this.setState({ books: foundBooks, badTerms: [] })
                }

            })
        } else {
            this.setState({
                books: [],
                badTerms: badTerms
            })
        }




    }

    render() {
        const { addBookToShelf, allBooks } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        {/* <button className="close-search" >Close</button> */}
                        Close
                    </Link>
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
                    {(this.state.badTerms.length < 1)
                        ? <ShelfBooks
                            bookList={this.state.books}
                            changeSelf={addBookToShelf}
                            allBooks={allBooks}
                        />
                        : <div> Bad Thearm </div>
                    }

                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }

}

export default SearchMain