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

  updateBooks = (book, Nshelf) => BooksAPI.update(book,Nshelf).then(() => {
    this.setState({book}) // here filter out book from state and then add new book to state
  })

  getShelfBooks(shelfName){
        return this.state.books.filter((b) => b.shelf === shelfName)
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
       })}


  render() {
    return (

  <div className="app">

this.log(this.state.books())
  <Route exact path='/' component={FrontPage}/>
  <Route path='/search' component={SearchPage}/>

 </div>
) //end return... add <SearchPage/> too see search render={() => (<FrontPage/>)}

}
}

export default BooksApp
