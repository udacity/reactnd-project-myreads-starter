import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './components/Shelf'
import SearchPage from './components/SearchPage'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class BooksApp extends React.Component {
    state = {
      books: [],
      showSearchPage: false
    }

    componentDidMount(){
        BooksAPI.getAll().then(books => {
            this.setState({books})
            console.log(books)
        })
    }

    updateShelf = (book, shelf) => { BooksAPI.update(book,shelf).then(()=>{
        book.shelf = shelf;
        const reorderedBooks = this.state.books.filter((fb) => fb.id !== book.id).concat([book])
        this.setState({books: reorderedBooks})
    }) } 

    render() {

        return (
            <div className="app">
            {this.state.showSearchPage ? (
                <SearchPage />
                ) : (
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
                                updateShelf={this.updateShelf}
                                />
                        </div>
                        <div>
                            <Shelf 
                                shelfTitle='Currently Reading'
                                books={this.state.books}
                                shelf='currentlyReading' 
                                updateShelf={this.updateShelf}
                                />
                        </div>
                        <div>
                            <Shelf 
                                shelfTitle='Already Read'
                                books={this.state.books}
                                shelf='read' 
                                updateShelf={this.updateShelf}
                                />
                        </div>
                    </div>
                </div> 
            )}
            <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
              
            </div>
            
        )}
}

export default BooksApp
