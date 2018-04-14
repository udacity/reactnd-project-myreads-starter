import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import './App.css'

class SearchPage extends React.Component {
    state = {
        value: '',
        books: []
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
            BooksAPI.update({id: book.id}, event.target.value).then((res) => {
                
            }).catch(() => {
                console.error('fail to switch BookShelf!')
            })
        }
        
    }

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange.bind(this)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <BookShelf books={this.state.books} switchBookShelf={this.switchBookShelf}/>
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchPage;