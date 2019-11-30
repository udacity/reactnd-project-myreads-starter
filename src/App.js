import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from './Header';
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

class App extends Component {
  state = { 
    books: [],  
  };

  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    searchResults: PropTypes.array.isRequired,
   };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  };

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(books => this.setState({ books }))
  };   

  render() {
    const { books } = this.state;
    return (
      <div className="App">      
      <Header />
      <section className="section is-medium is-light">
           <Route
            path="/add"
            component={SearchBooks}
            books={books} changeShelf={this.changeShelf}            
          />
        </section>
        <section className="section">
          <Route
            exact path="/" books={books} render={() => (
              <div className="wrapper">                
               {books.map((book, shelf) => (
               <BookShelf key={shelf} book={book} books={books} changeShelf={this.changeShelf} />
               ))}
               <Link to="/add">
                <div className="open-search">                 
                </div>
                </Link>
              </div>              
            )}
          /> 
        </section> 
      </div>
    );
    
  }
}

export default App;