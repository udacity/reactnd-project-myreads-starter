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
    //showSearchPage: false
  }

  getAllBooks(){
    BooksAPI.getAll().then(books => this.state({books}))
  }

  updateShelf = (book, Nshelf) => BooksAPI.update(book,Nshelf).then(() => {
    this.setState({book}) // here filter out book from state and then add new book to state
  })



    componentDidMount(){
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
            console.log(this.state.books);

       })}

       ComponentDidUpdate() {
    //console.log(this.state.books);
}


  render() {
    return (

  <div className="app">



  <Route exact path='/' render={() =>(
    <FrontPage books = {this.state.books} updateShelf = {this.updateShelf}  />
  )}/>
  <Route path='/search' render={() =>(
    <SearchPage />
  )}/>

 </div>
) //end return... add <SearchPage/> too see search render={() => (<FrontPage/>)}

}
}

export default BooksApp
