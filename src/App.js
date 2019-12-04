import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './css/App.css';
import Header from './Header';
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf';
import ErrorBoundary from './ErrorBoundary';

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


  getShelfBooks(shelfName){
  return this.state.books.filter((b) => b.shelf === shelfName)
}

  bookUpdate = (book, newShelf) => {        
      BooksAPI.update(book, newShelf).then(() => {
        book.shelf = newShelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }));
      });
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
              <ErrorBoundary>
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
                  {...other}
                />
                <br />
                <BookShelf 
                  title="Read"
                  books={this.getShelfBooks("read")}
                  bookUpdate={this.bookUpdate}
                  {...other}             
                />
                <br />
              ))}
               <Link to="/add">
                <div className="open-search">                 
                </div>
                </Link>
              </div>
              </ErrorBoundary>              
            )}/> 
        </section> 
       
           <Route path="/add" render={() => (            
             <ErrorBoundary>
                <SearchBooks 
                books={this.state.books}                
                bookUpdate={this.bookUpdate}                
                {...other}
                 />
              </ErrorBoundary>
           )}/>
      </div>
    );
    
  }
}

export default App;