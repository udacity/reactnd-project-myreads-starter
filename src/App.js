import React from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SearchBook from './SearchBook';
import './App.css';

class BooksApp extends React.Component {
  state = {
    currentlyReadingBooks : [], 
    wantToReadBooks : [], 
    readBooks : [], 
    searchedBooks : []
  }

  componentDidMount(){
    this.init();
  }
  
  init() {
    BooksAPI.getAll().then((data) => {
     
      var currentlyReading = data.filter( (book) => book.shelf === 'currentlyReading' );
      var wantToRead =data.filter( (book) => book.shelf === 'wantToRead' );
      var read =data.filter( (book) => book.shelf === 'read' );
      this.setState({currentlyReadingBooks : currentlyReading , 
                     wantToReadBooks : wantToRead , 
                     readBooks : read });
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
                  data={this.state.currentlyReadingBooks} 
                  onUpdate={this.updateBook}
                />
                <BookShelf title="Want to Read" 
                  data={this.state.wantToReadBooks} 
                  onUpdate={this.updateBook}
                />
                <BookShelf title="Read" 
                  data={this.state.readBooks} 
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
