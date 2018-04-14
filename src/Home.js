import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import './App.css'

class HomePage extends React.Component {
    state = {
        currentlyReadingBooks: [],
        wantToReadBooks:[],
        readBooks: []
    }

    componentDidMount() {
        this.updateBookShelf();
    }

    updateBookShelf() {
        console.log('update');
        BooksAPI.getAll().then((data) => {
                const currentlyReadingBooks = data.filter((book) => {
                    return book.shelf === 'currentlyReading';
                });
                const wantToReadBooks = data.filter((book) => {
                    return book.shelf === 'wantToRead';
                });
                const readBooks = data.filter((book) => {
                    return book.shelf === 'read';
                });
                this.setState({
                    currentlyReadingBooks: currentlyReadingBooks,
                    wantToReadBooks: wantToReadBooks,
                    readBooks: readBooks
                 }, () => {

                 });
            })
    }

    switchBookShelf(book, event) {
        const that = this;
        if (book.shelf !== event.target.value) {
            BooksAPI.update({id: book.id}, event.target.value).then((res) => {
                that.updateBookShelf();
            }).catch(() => {
                console.error('fail to switch BookShelf!')
            })
        }
        
    }

    render() {
        return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books"><BookShelf showChanger={true}  books={this.state.currentlyReadingBooks} switchBookShelf={this.switchBookShelf}/></div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books"><BookShelf showChanger={true} books={this.state.wantToReadBooks} switchBookShelf={this.switchBookShelf}/></div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books"><BookShelf showChanger={true} books={this.state.readBooks} switchBookShelf={this.switchBookShelf}/></div>
                </div>
              </div>
            </div>

            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
          </div>
    )}
}

export default HomePage;