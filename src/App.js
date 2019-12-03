import React, {Component} from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from './Header';
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf';
import onRemoveBook from './BookButton';

class App extends Component {

  state = { 
    books: [],
    toHome: false,
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
  BooksAPI.search(query).then(books => {
    this.setState({books})})
};

  getShelfBooks(shelfName){
  return this.state.books.map((book) => book.filter((b) => b.shelf === shelfName))
}

  bookUpdate = (book, shelf) => {        
      BooksAPI.update(book, shelf)
        .then(this.setState(prevState => ({ books: this.state.books }))
        .then(this.setState(() => ({
          toHome: true
        }))))
      }

  onBookUpdate () {
    this.onBookUpdate.current.bookUpdate()
      }



render() {
const {bookUpdate, ...other} = this.props;
this.removeBook = React.createRef();
this.onBookUpdate = this.onBookUpdate.bind(this);
this.select = React.createRef();


if (this.state.toHome === true) {
  return <Redirect to='/' />
}
    return (
      <div className="App">      
      <Header />
        <section className="section">
          <Route
            exact path="/" render={({history}) => (
              <div className="row">                              
               <BookShelf 
                  title="Currently Reading"
                  books={this.getShelfBooks("currentlyReading")}
                  onBookUpdate={(book, shelf) => {
                    this.bookUpdate(book, shelf)
                    history.push('/')
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
                    history.push('/')
                    }}
                  updateShelf={this.updateShelf}   
                />
                <br />
                <BookShelf 
                  title="Read"
                  books={this.getShelfBooks("read")}
                  onBookUpdate={(book, shelf) => {
                    this.bookUpdate(book, shelf)
                    history.push('/')
                    }}
                  updateShelf={this.updateShelf}                    
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
                updateShelf={this.updateShelf}  
                onBookUpdate={(book, shelf) => {
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