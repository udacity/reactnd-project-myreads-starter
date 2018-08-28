import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import FrontPage from './FrontPage.js'
import SearchPage from './SearchPage.js'

import './App.css'

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: []

  }


  // passes BooksApi with new shelf for the passed book, then updates state with updated book
  updateShelf = (shelfName, book) => {

// book is the current book.
// shelf is the current shelf.

  BooksAPI.update({ id: book.id }, shelfName).then((responce) => {

// if not on shelf add to shelf
    if(book.shelf == null)
    {
      book.shelf = shelfName;
      let joined = this.state.books.concat(book);
      this.setState({ books: [...joined] })
 }
// if updated book's shelf is none then take it off a shelf
 if( shelfName === 'none')
 {
   book.shelf = shelfName;



   let array = [...this.state.books]; // make a separate copy of the array
     let index = array.indexOf(book)
     array.splice(index, 1);
     this.setState({books: array});
 }
// updates the state with the updated book
this.setState(({ books }) => {

         books: books.filter(b =>
           b.id === book.id ? b.shelf = shelfName : b // go through books if
           // the changed book is in the state
           // change the shelf name, if not then just return the book
         )

     });
})

}

  //if component did mount then update state with all books
    componentDidMount(){
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
       })}




  render() {
    // renders the front page
    // renders the search page
    return (
  <div className="app">
  <Route exact path='/' render={() =>(
    <FrontPage books={this.state.books} onUpdateShelf={this.updateShelf}/>
  )}/>
  <Route path='/search' render={({history}) =>(
    <SearchPage books={this.state.books} onUpdateShelf={this.updateShelf}/>

  )}/>

 </div>
)

}
}

export default BooksApp
