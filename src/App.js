import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ShelfsBooks from "./components/shelfBooksRender";
import Search from "./components/search";
import { Link, Route } from "react-router-dom";
import BookDetails from "./components/bookDetails";


/**
 * top parent where defines router components and instantiate all component
 *  handing shelf selection in here and send aknowldgement to server 
 *  rendering main pages
 * components map:  1- BooksApp => Search => SearchBooks => Books
 *                  2- BooksApp => BooksShelfRender => Book 
 */

class BooksApp extends React.Component {

  state = {
    books: [],
    shelfs: [],
    showSearchPage: false,
    isUpdated: false,
  };

  /**
   * load when component inserted into DOM to fetch API and get books using API.getAll()
   * function get result from API and then iterate over it to get important fields for book and shelf Components
   */
  componentDidMount = () => {
    let [books, shelfs] = [[], []];             //initialize empty arrays for pushing data in it
      BooksAPI.getAll().then((res) => {

        res.forEach((cur) => {
          if (!shelfs.includes(cur.shelf)) shelfs.push(cur.shelf);    //only push shelf if not find in shelfs array

          //initilzie category to if empty to avoid undefined values
          const categories = cur.categories ? [...cur.categories] : [];   
          
          //get fields from books and push it into books array
          books.push({
            id: cur.id,
            title: cur.title,
            shelf: cur.shelf,
            bookImage: cur.imageLinks.smallThumbnail,
            categories: [...categories],
            authors: [...cur.authors],
          });
        });
        //set state with recived data from server
        this.setState({ books, shelfs });
      });
  };

  /**
   *Update state of books and push not defined books into state and track book shefl
   * 
   * @param {*} bookState: express about new selected shelf name  
   * @param {*} updatedBook : is book object that fired event
   */
  updateBookShelf = (bookState, updatedBook) => {
    
    //fetch API to update 
    BooksAPI.update(updatedBook, bookState)
      .then((res) => {
        if (bookState !== "none") {                         //at shelf not none 
          this.setState((curState) => {                     //update state and remove book
            const books = [...curState.books];              //cloning current books state
            updatedBook.shelf = bookState;
            const index = books.indexOf(updatedBook);       //get target book
            if (index === -1) books.push({ ...updatedBook });   //if index book not find then add it 
            else {
              books[index].shelf = bookState;               //else update book shelf
            }
            return { books };                               //set state with new data 
          });
        } 
        else {                                              //if assign to none then remove book from shelfs
          this.setState((curState) => {
            const books = curState.books.filter(            //filter and remove book
              (book) => book.id !== updatedBook.id
            );
            return { books };
          });
        }

        //cached updated books into localStorage to keep its ids at reloading
        //this.cachedBooks();
      })
      .catch((er) => alert(`Error! can't update data `));
  };

  /**
   * render two component search component and shelf component for rendering main page books using Link and Route 
   * @returns return mark up to inject into html index page as final result1
   */
  render() {
    return (
      <div className="app">
        <Route
          path="/components/search"
          render={() => (
            <Search
              shelfs={this.state.shelfs}
              books={this.state.books}
              onUpdateBookShelf={this.updateBookShelf}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div>
              <div style={{}}>
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
              </div>
              <ShelfsBooks
                shelfs={this.state.shelfs}
                books={this.state.books}
                onUpdateBookShelf={this.updateBookShelf}
              />
              <div className="open-search">
                <Link to="/components/search">
                  <button
                    onClick={() =>
                      this.setState({
                        showSearchPage: true,
                      })
                    }
                  />
                </Link>
              </div>
            </div>
          )}
        />
        <Route exact path="/components/bookDetails/:id" render = {(props)=> 
          {
            return(
              <BookDetails {...props} onUpdateBookShelf={this.updateBookShelf}/>
          )
          }} 
        />
      </div>
    );
  }
}

export default BooksApp;
