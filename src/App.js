import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ShelfsBooks from "./components/shelfBooksRender";
import Search from "./components/search";
import { Link, Route } from "react-router-dom";


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
            bookId: cur.id,
            title: cur.title,
            shelf: cur.shelf,
            bookImage: cur.imageLinks.smallThumbnail,
            categories: [...categories],
            authors: [...cur.authors],
          });
        });

        /* if requried to use caching so trying to use localStorage as cache for books, 
                so load last state of books ids on shelfs from localStorage 

            // if (localStorage.length > 0 ) {
            //   const ids = [];
            //   const readBooks = localStorage.getItem('currentlyReading');
            //   const currentlyReadingBooks = localStorage.getItem('read');
            //   const wantToreadBooks = localStorage.getItem('wantToRead');  

            //   currentlyReadingBooks && ids.push(...currentlyReadingBooks.split(','));
            //   readBooks && ids.push(...readBooks.split(','));
            //   wantToreadBooks && ids.push(...wantToreadBooks.split(','));
              
            //   const uniqueIds = new Set(ids);
            //   console.log(uniqueIds);
              
            //   const booksIds = books.map(book => book.bookId);
            //   const recentAddBooksIds = [...uniqueIds].filter(id => !booksIds.includes(id));
              
            //   const recentAddBooks = this.getBookById(recentAddBooksIds);
            //   console.log(recentAddBooks);
            //   (recentAddBooksIds.length > 0) && books.push([...recentAddBooks]);
    
            //   books.forEach(book => {
            //     if (readBooks.includes(book.bookId))
            //       book.shelf = 'read';
            //     else if(currentlyReadingBooks.includes(book.bookId))
            //       book.shelf = 'currentlyReading';
            //     else if (wantToreadBooks.includes(book.bookId))
            //       book.shelf = 'wantToRead';
            //     else
            //       book.shelf = 'none';
            //   })
            // }
              }
            */
        
        //set state with recived data from server
        this.setState({ books, shelfs });
      });
  };

//function for geting books that store in localstorage by Id, has a bug
  getBookById = async (booksIds)=>{
    // const books = [];
    // await booksIds.forEach(id => {      
    //   BooksAPI.get(id).then(res=> {
    //     console.log(res);
    //     books.push(res);
    //   })
    // });
    // return books;
  }

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
              (book) => book.bookId !== updatedBook.bookId
            );
            return { books };
          });
        }

        //cached updated books into localStorage to keep its ids at reloading
        //this.cachedBooks();
      })
      .catch((er) => alert(`Error! can't update data `));
  };

  
  //cached updated books in localStorage  
  cachedBooks = () => {
    // const books = [...this.state.books];
    // console.log(books);
    // const currentlyReadingBooksIds = books.filter(book => book.shelf === "currentlyReading").map(book=> book.bookId); 
    // const readBooksIds = books.filter(book => book.shelf === 'read').map(book=> book.bookId); 
    // const wantToReadBooksIds = books.filter(book => book.shelf === 'wantToRead').map(book=> book.bookId);
    // console.log(currentlyReadingBooksIds);
    // console.log(readBooksIds);
    // console.log(wantToReadBooksIds);
    // localStorage.setItem('currentlyReading',[...currentlyReadingBooksIds]);
    // localStorage.setItem('read',[...readBooksIds]);
    // localStorage.setItem('wantToRead',[...wantToReadBooksIds]);
    // console.log(localStorage.getItem('read'));
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
      </div>
    );
  }
}

export default BooksApp;
