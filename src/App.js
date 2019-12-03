import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from './Header';
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf';


class App extends Component {

   state = { 
    books: [],
  };

  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
  });
  };


 getShelfBooks(shelfName){
    return this.state.books.filter((b) => b.shelf === shelfName)
 }
  
searchBooks = (query) => {
  BooksAPI.search(query).then(books => {
    this.setState({books})})
};

/* changeShelf = (book, newShelf) => {
  BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }));
  });
}; */

// bookUpdate = this.props;


      bookUpdate = (book, shelf) => {        
        BooksAPI.update(book, shelf).then(() => {          
          // Filter out the book and append it to the end of the list
          // so it appears at the end of whatever shelf it was added to.
          this.setState(state => ({
              books: state.books.filter(b => b.id !== this.state.books.id).concat([ this.state.books ])
          }));
      })}

render() {
const {bookUpdate, ...other} = this.props;

    return (
      <div className="App">      
      <Header />
        <section className="section">
          <Route
            exact path="/" render={() => (
              <div className="row">                              
               <BookShelf 
                  title="Currently Reading"
                  books={this.getShelfBooks("currentlyReading")}
                  bookUpdate={this.bookUpdate} 
                  {...other}
                />
                <br />
                <BookShelf 
                  title="Want to Read"
                  books={this.getShelfBooks("wantToRead")}
                  bookUpdate={this.bookUpdate}  
                />
                <br />
                <BookShelf 
                  title="Read"
                  books={this.getShelfBooks("read")}
                  bookUpdate={this.bookUpdate} 
                />
                <br />
               <Link to="/add">
                <div className="open-search">                 
                </div>
                </Link>
              </div>              
            )}/> 
        </section> 
           <Route path="/add" render={({history}) => (            
                <SearchBooks books={this.state.books} 
                onBookUpdate={(book, shelf) =>{
                  this.bookUpdate(book, shelf)
                  history.push('/')
                }} 
                onSearchBooks={(query) => {
                  this.searchBooks({query})
                  history.push('/')
                  }}
                 />
           )}/>
      </div>
    );
    
  }
}

export default App;