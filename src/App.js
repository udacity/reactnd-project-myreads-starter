import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
// import Shelf from './components/Shelf';
import { Book } from './components/Book';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    currentlyReading:[],
    read:[],
    wantToRead: [],
    
  }
  //TODO: ADD COMPONENT DID MOUNT AND GET STATE OF BOOKS 
   componentDidMount() {
    BooksAPI.getAll().then(books => {  
      this.setState(()=>({
        books,
        currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
        read: books.filter(book => book.shelf === 'read'),
        wantToRead: books.filter(book => book.shelf === 'wantToRead')
      }))
     })   
 
  }
  //https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm
  
  changeShelf = (book, shelf)=> {     
   const bookToUpdate = this.state.books.filter(currentBook => currentBook.id === book.id);
    BooksAPI.update(book, shelf).then(updateBooks => {
      this.setState(()=>({
        currentlyReading: this.state.books.filter(book => book.shelf === 'currentlyReading'),
        read: this.state.books.filter(book => book.shelf === 'read'),
        wantToRead: this.state.books.filter(book => book.shelf === 'wantToRead')
      }))
    })  
}

  render() {  
    
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              {/**
               * TODO: NOTE ADD LINK TO OPEN SEARCH BOOK PAGE
               */}
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  
                  <Book books={this.state.currentlyReading} changeShelf={this.changeShelf}/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                      <Book books={this.state.wantToRead} changeShelf={this.changeShelf}/>
                    
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <Book books={this.state.read} changeShelf={this.changeShelf}/>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
