import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import './App.css'

class SearchPage extends React.Component {
    state = {
        value: '',
        books: [],
        booksState: {currentlyReading: [], read: [], wantToRead: []}
    }

    handleChange(event) {
        const that = this;
        that.setState({
            value: event.target.value
        }, () => {
            if (that.searchTimer) clearTimeout(that.searchTimer);
            that.searchTimer = setTimeout(() => {
                that.search();
            }, 500);
            
        })
        
    }

    search() {
        const that = this;
        BooksAPI.search(that.state.value).then((data) => {
            that.setState({
                books: data.length ? data : []
            })
        })
    }

    switchBookShelf(book, event) {
        const that = this;
        if (book.shelf !== event.target.value) {
            console.log('moveToBookShelf')
            BooksAPI.update({id: book.id}, event.target.value).then((res) => {
                that.setState({
                    booksState: res
                })
            })
        }
        
    }

    updateBookSelect(checked, bookId) {

        this.setState((prevState) => {
            let len = this.state.books.length;
            while (len--) {
                if (prevState.books[len].id === bookId) {
                    prevState.books[len].selected = checked;
                    return {
                        books: prevState.books
                    }
                }
            }
            
        })
    }

    componentDidMount() {
        BooksAPI.getAll().then((data) => {
            let booksState = {};
            data.forEach((book) => {
                if (booksState[book.shelf]) {
                    booksState[book.shelf].push(book.id);
                } else {
                    booksState[book.shelf] = [];
                    booksState[book.shelf].push(book.id);
                }
            })
            this.setState({
                booksState: booksState
            })
        })
    }

    render() {
        const {books, booksState} = this.state;
        const keys = ['currentlyReading', 'read', 'wantToRead']
        keys.forEach((key) => {
            for (let i = 0, len = booksState[key].length; i < len; i++) {
                for (let j =0, len1 = books.length; j < len1; j++) {
                    if (booksState[key][i] === books[j].id) {
                        books[j].shelf = key;
                        break;
                    }     
                }
            }
        })
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange.bind(this)}/>

              </div>
            </div>
            <div className="search-books-results">
              <BookShelf updateBookSelect={this.updateBookSelect.bind(this)} books={books} moveToBookShelf={this.switchBookShelf.bind(this)}/>
            </div>
          </div>
        )
    }
}

export default SearchPage;