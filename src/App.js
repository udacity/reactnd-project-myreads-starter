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
    shelfBooks: [],
  };

  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
  })
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
    .then(books => {this.setState({books})})
}

  getShelfBooks(shelfName){
  return this.state.books.filter((b) => b.shelf === shelfName)
}

  bookUpdate(book, shelf){        
      BooksAPI.update(book, shelf)
        .then(this.setState((update) => ({ book: update.book, shelf: update.shelf }))
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
                  bookUpdate={(book, shelf) => {
                    this.bookUpdate(book, shelf)
                    }}
                  updateShelf={this.updateShelf} 
                  ref={this.select}
                  {...other}
                />
                <br />
                <BookShelf 
                  title="Want to Read"
                  books={this.getShelfBooks("wantToRead")}
                  bookUpdate={(book, shelf) => {
                    this.bookUpdate(book, shelf)
                    }}
                  ref={this.select}
                />
                <br />
                <BookShelf 
                  title="Read"
                  books={this.getShelfBooks("read")}
                  bookUpdate={(book, shelf) => {
                    this.bookUpdate(book, shelf)
                    }}

                  ref={this.select}                    
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
                ref={this.select}
                updateShelf={this.updateShelf}  
                bookUpdate={(book, shelf) => {
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