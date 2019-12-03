import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from './Header';
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf';
import onRemoveBook from './BookButton';

class App extends Component {

  state = { 
    books: [],
    shelfBooks: [],
  };

  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
  });
  };

  removeBook() {
    BooksAPI.update(onRemoveBook.book, onRemoveBook.shelf)
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
    .then(books => {this.setState({books})})
};

  getShelfBooks(shelfName){
  return this.state.books.map((shelfBooks) => this.state.shelfBooks.filter((b) => b.shelf === shelfName))
}

  bookUpdate = (book, shelf) => {        
      BooksAPI.update(book, shelf)
        .then(this.setState(prevState => ({ books: this.state.books }))
        )
      }


render() {
const {bookUpdate, ...other} = this.props;
this.removeBook = React.createRef();
this.select = React.createRef();


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
                  onBookUpdate={(book, shelf) => {
                    this.bookUpdate(book, shelf)
                    }}
                  updateShelf={this.updateShelf} 
                  ref={onRemoveBook}
                  {...other}
                />
                <br />
                <BookShelf 
                  title="Want to Read"
                  books={this.getShelfBooks("wantToRead")}
                  onBookUpdate={(book, shelf) => {
                    this.bookUpdate(book, shelf)
                    }}
                  updateShelf={this.updateShelf}   
                />
                <br />
                <BookShelf 
                  title="Read"
                  books={this.getShelfBooks("read")}
                  onBookUpdate={(book, shelf) => {
                    this.bookUpdate(book, shelf)
                    }}
                  updateShelf={this.updateShelf}                    
                />
                <br />
              ))}
               <Link to="/add">
                <div className="open-search">                 
                </div>
                </Link>
              </div>              
            )}/> 
        </section> 
           <Route path="/add" render={() => (            
                <SearchBooks books={this.state.books}
                updateShelf={this.updateShelf}  
                onBookUpdate={(book, shelf) => {
                    this.bookUpdate(book, shelf)
                    }}
                onSearchBooks={(query) => {
                  this.searchBooks({query})
                  }}
                 />
           )}/>
      </div>
    );
    
  }
}

export default App;