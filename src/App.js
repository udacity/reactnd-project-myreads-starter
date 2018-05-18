import React,{Component} from 'react';
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

  getAllBooks(){
    BooksAPI.getAll().then(books => this.state({books}))
  }

  updateShelf = (shelfName, book) => {

// book is the current book.
// shelf is the current shelf.

  BooksAPI.update({ id: book.id }, shelfName).then((responce) => {


    if(book.shelf == null)
    {
      book.shelf = shelfName;
      var joined = this.state.books.concat(book);
      this.setState({ books: [...joined] })
 }

 if( shelfName == 'none')
 {
   book.shelf = shelfName;

   var tempState = this.state.books.filter((b) => b.id == book.id);

   var array = [...this.state.books]; // make a separate copy of the array
     var index = array.indexOf(book)
     array.splice(index, 1);
     this.setState({books: array});

     this.setState(() =>
     {books: [...tempState]})


 }

this.setState(({ books }) => {

         books: books.filter(b =>
           b.id === book.id ? b.shelf = shelfName : b // go through books if
           // the changed book is in the state
           // change the shelf name, if not then just return the book
         )

     });
})

}







    componentDidMount(){
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
          //  console.log(this.state.books);

       })}

      


  render() {
    return (

  <div className="app">



  <Route exact path='/' render={() =>(
    <FrontPage books = {this.state.books} onUpdateShelf = {this.updateShelf}  />
  )}/>
  <Route path='/search' render={({history}) =>(
    <SearchPage books={this.state.books} onUpdateShelf = {this.updateShelf}  />

  )}/>

 </div>
) //end return... add <SearchPage/> too see search render={() => (<FrontPage/>)}

}
}

export default BooksApp
