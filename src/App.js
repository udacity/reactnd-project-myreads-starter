import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import Book from './Book.js';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class BooksApp extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      search: [],
    }
    
    this.getShelves(true);
  }
  
  getShelves = async initial => {
    initial || this.setState({currentlyReading: [], wantToRead: [], read: []});
    const books = await BooksAPI.getAll();
    if (books.error)
      return;
    books.forEach(result => {
      const authors = result.hasOwnProperty("authors")? result.authors.join(" & "): "Unkown";
      const thumbnail = result.hasOwnProperty("imageLinks")? result.imageLinks.smallThumbnail || result.imageLinks.thumbnail: "";
      const book = this.createBook(result.id, result.title, authors, ('url("' + thumbnail + '")'), result.shelf);
      this.state[result.shelf].push(book);
    });
    this.setState({});
  }
  
  createBook = (id, title, authors, image, shelf) => {
    return (<Book id={id} title={title} authors={authors} image={image} changer={this.changer} shelf={shelf}></Book>);
  }

  changer = (book, current, destination) => {
    console.log("Moving " + book.title + " from " + current + " to " + destination);
    const index = (current !== "none")? this.state[current].findIndex(element => element.props.id === book.id): -1;
    if (index > -1) {
      this.state[current].splice(index, 1);
    }
    if (destination !== "none") {
      const newBook = this.createBook(book.id, book.title, book.authors, book.image, destination);
      this.state[destination].push(newBook);       
    }
    this.setState({});
    return;
  }

  search = async event => {
    const newSearch = [];
    const {value} = event.target;
    if (value === "")
      return;
    const results = await BooksAPI.search(value);
    if (results.error)
      return;
    results.forEach(result => {
      const authors = result.hasOwnProperty("authors")? result.authors.join(" & "): "Unkown";
      const thumbnail = result.hasOwnProperty("imageLinks")? result.imageLinks.smallThumbnail || result.imageLinks.thumbnail: "";
      let shelf = "none";
      const shelves = ["currentlyReading", "wantToRead", "read"]
      for (let stateShelf of shelves) {
        if (this.state[stateShelf].find(book => book.props.id === result.id)) {
          shelf = stateShelf;
          break;
        }
      }
      const book = this.createBook(result.id, result.title, authors, ('url("' + thumbnail + '")'), shelf);
      newSearch.push(book);
    });
    this.setState({search: newSearch});
  }

  render = () => {
    return (
    <BrowserRouter>
      <div className="app">
     	<Route path='/search' render={() =>
      	 <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.search}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
				{this.state.search.map(book => <li key={book.props.id + ".search"}>{book}</li>)}
			  </ol>
            </div>
          </div>
		 }>      
		 </Route>
		 <Route exact path='/' render={() =>
		  <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
					  {this.state.currentlyReading.map(book => <li key={book.props.id + ".current"}>{book}</li>)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
					  {this.state.wantToRead.map(book => <li key={book.props.id + ".want"}>{book}</li>)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
					  {this.state.read.map(book => <li key={book.props.id + ".read"}>{book}</li>)}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
		 }>          
		</Route>
      </div>
	</BrowserRouter>
    )
  }
}

export default BooksApp
