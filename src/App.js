import React, {Component} from 'react';
import { Route, Link, history } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from './Header';
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

class App extends Component {


  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
   };
   
   state = { 
    books: [],    
  };

  
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  };

  
searchBooks = (query) => {
  BooksAPI.search(query).then(books => {
    this.setState({books})})
};

  changeShelf = (book, shelf) => {
  // API: update book/shelf 
    BooksAPI.update(book, shelf).then(this.setState(book.shelf))
}

render() {

    return (
      <div className="App">      
      <Header />
        <section className="section">
          <Route
            exact path="/" render={() => (
              <div className="wrapper">                
               {this.state.books.map(book => (
               <BookShelf key={book.shelf} title={book.shelf} books={this.state.books} changeShelf={this.changeShelf} />
               ))}
               <Link to="/add">
                <div className="open-search">                 
                </div>
                </Link>
              </div>              
            )}
          /> 
        </section> 
           <Route path="/add">            
           <section className="section is-medium is-light">
            <SearchBooks 
            books={this.state.books} searchBooks={this.searchBooks} onChangeShelf={(shelf) => {
              this.changeShelf(shelf)
              history.push('/');
            }} 
            />
            </section>           
            </Route>
        
      </div>
    );
    
  }
}

export default App;