import React from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import '../App.css'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import { Route } from 'react-router-dom';
import * as _ from 'underscore';

//Initializing list of available book shelf/categories
const bookShelves = [{ name: 'currentlyReading', displayTitle: "Currently Reading" },{ name: 'wantToRead', displayTitle: "Want to Read" },{ name: 'read', displayTitle: "Read" }];
const acceptedBookShelves = ["wantToRead", "currentlyReading", "read"];

class BooksApp extends React.Component {
  
  //Initializing component state in class constructor
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchedBooks: [],
      showSearchPage: false,
      loadShelvesSpinner: {
        currentlyReading: true,
        wantToRead: true,
        read: true,
        searchPage: false
      },
      showSearchMessage: false,
      movingBook: false
    }

    //Using Debounce Mechanism to Delay execution of API search request as user types for 1000 ms (1sec); hence, improving performance
    this.handleInputChangeThrottled = _.debounce(this.handleBookSearch, 1000);
  }

  componentDidMount=()=>{
    
    //Getting all Books available in Shelves for display
    this.getAllShelfBooks();
  }

  /**
   * @description This function handles the movement of books from one shelf to another
   * @param {string} targetShelf - The selected shelf which book is to be moved to
   * @param {object} book - An object containing book information such as title, id, etc.
   * @returns {books} - An updated array of books that reflects current component state after book was moved successfully
   */
  handleBookMove = (targetShelf, book) => {
    if(book && book.id){

      //Updating state to load Spinner for affected Shelves
      const loadSpinners = {}
      
      if(targetShelf){
        //loadSpinners[targetShelf]=true;
      }
      if(book.shelf){
        //loadSpinners[book.shelf]=true;
      }
      
      this.setState({ loadShelvesSpinner: loadSpinners, movingBook:true});
    
      if(!(acceptedBookShelves.includes(targetShelf))){
        targetShelf="none";
      }

      //Making an API request to update book in the server and then updating the component state to contents rendered on page
      BooksAPI
        .update(book,targetShelf)
        .then((returned_data)=>{

          //Getting all Books available in Shelves for display
          this.getAllShelfBooks();
        })
    }
  }

/**
 * @description This function handles the searching of books on the search page as the user types into the search field
 * @param {string} searchQuery - This is the user input search term to be using for the searching
 * @returns {books} - An array of books that matches the search term which is also updated on the component state for every search
 */
  handleBookSearch = (searchQuery) => {
    
    //Updating state to load Spinner while books are being searched 
    const loadSpinners = { searchPage: true }
    this.setState({ loadShelvesSpinner: loadSpinners, showSearchMessage:false });

    if (searchQuery !== "") {

      BooksAPI
        .search(searchQuery)
        .then((fetched_books) => {
        this.setState((currentState) => {
          return (
            {
              searchedBooks: fetched_books,
              loadShelvesSpinner: {
                searchPage: false
              },
              showSearchMessage:true
            }
          );
        })  
      });
    } else {
      this.setState((currentState) => {
        return (
          {
            searchedBooks: [],
            loadShelvesSpinner: {
              searchPage: false
            }
          }
        );
      })  
    }
 
  }

   /**
   * @description This function makes an API request to the server to fetch all available books in shelves
   * @returns {books} - An array of books that is reflected in the component state
   */
  getAllShelfBooks=()=>{
    return (
      BooksAPI.getAll().then((fetched_books) => {
        this.setState((currentState)=>{
          return (
            {
              books: fetched_books,
              loadShelvesSpinner: {
                currentlyReading: false,
                wantToRead:false,
                read:false,
              },
              movingBook: false
            }
          );
        })  
      })
    );
  }

  render() {
    return (
      <div className="app">
        <Route exact
          path="/"
          render={() => (
            <ListBooks books={this.state.books} movingBook={this.state.movingBook} loadShelvesSpinner={this.state.loadShelvesSpinner} bookShelves={bookShelves} handleBookMove={this.handleBookMove} />
          )}
        />
        <Route exact
          path="/search"
          render={() => (
            <SearchBooks booksInShelves={this.state.books} movingBook={this.state.movingBook} handleBookSearch={this.handleInputChangeThrottled} searchedBooks={this.state.searchedBooks} acceptedBookShelves={acceptedBookShelves} handleBookMove={this.handleBookMove} loadShelvesSpinner={this.state.loadShelvesSpinner} showSearchMessage={this.state.showSearchMessage} />
          )}
        />
        
      </div>
    )
  }

}

export default BooksApp;
