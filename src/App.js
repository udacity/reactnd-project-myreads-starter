import React from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SearchBook from './SearchBook';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books : [],
    searchedBooks : []
  }

  componentDidMount(){
    this.init();
  }
  
  init() {
    BooksAPI.getAll().then((data) => {
      this.setState({books : data});
    });
  }

  updateBook = ( bookId , shelf  ) => {
    
    BooksAPI.update ( {id:bookId } ,   shelf).then((data) =>{
      this.init();
    });
  }

  search = ( searchTerm ) => {
    
    BooksAPI.search(searchTerm , 3).then((data) => {
      this.setState({searchedBooks : data } );
    });
  }

  render() {

    const currentlyReadingBooks = this.state.books.filter( (book) => book.shelf === 'currentlyReading' );
    const wantToReadBooks = this.state.books.filter( (book) => book.shelf === 'wantToRead' );
    const readBooks = this.state.books.filter( (book) => book.shelf === 'read' );
    this.state.searchedBooks.forEach( (element) => {
        var filteredBooks = this.state.books.filter((book) => book.id === element.id);
        if ( filteredBooks.length === 1  ){
            var filteredBook = filteredBooks[0];
            element.shelf = filteredBook.shelf;
        }
    });

    return (
      <div className="app">
        <Route exact path='/search' render={ () => (
          <SearchBook onSearch={this.search} 
                      onUpdate={this.updateBook}
                      searchedBooks={this.state.searchedBooks} />
        )}/>
        <Route exact path='/' render={ () => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title="Currently Reading" 
                  data={currentlyReadingBooks} 
                  onUpdate={this.updateBook}
                />
                <BookShelf title="Want to Read" 
                  data={wantToReadBooks} 
                  onUpdate={this.updateBook}
                />
                <BookShelf title="Read" 
                  data={readBooks} 
                  onUpdate={this.updateBook}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp;
