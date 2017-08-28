import React from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
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
      console.log('all ' , data);
      var currentlyReading = data.filter( (book) => book.shelf === 'currentlyReading' );
      var wantToRead =data.filter( (book) => book.shelf === 'wantToRead' );
      var read =data.filter( (book) => book.shelf === 'read' );
      this.setState({currentlyReadingBooks : currentlyReading , 
                     wantToReadBooks : wantToRead , 
                     readBooks : read });
    });
  }

  updateBook = ( bookId , shelf  ) => {
    console.log('updating book ' + bookId + " to shelf " + shelf  );
    BooksAPI.update ( {id:bookId } ,   shelf).then((data) =>{
      console.log('data ', data);
      this.init();
    });
  }

  search = ( searchTerm ) => {
    
    BooksAPI.search(searchTerm , 3).then((data) => {
      console.log('data ' , data );
      this.setState({searchedBooks : data } );
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={ () => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" >Close</Link>
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
