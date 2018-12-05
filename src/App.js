import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './components/Shelf'

class BooksApp extends React.Component {
    state = {
      books: []
    }

    componentDidMount(){
        BooksAPI.getAll().then(books => {
            this.setState({books})
            console.log(books)
        })
    }

    /*
    updateShelf = (book, shelf) => { BooksAPI.update(book,shelf).then(()=>{
        book.shelf = shelf;
        const reorderedBooks = this.state.books.filter((fb) => fb.id !== book.id).concat([book])
        this.setState({books: reorderedBooks})
    }) } */

    render() {

        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <Shelf 
                                shelfTitle='Want To Read'
                                books={this.state.books}
                                shelf='wantToRead'
                                />
                        </div>
                        <div>
                            <Shelf 
                                shelfTitle='Currently Reading'
                                books={this.state.books}
                                shelf='currentlyReading' />
                        </div>
                        <div>
                            <Shelf 
                                shelfTitle='Already Read'
                                books={this.state.books}
                                shelf='read' />
                        </div>
                    </div>
                </div>
            <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
            </div>
            
        )}
}

export default BooksApp
