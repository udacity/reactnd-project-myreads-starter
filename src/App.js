import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchPage';
import MainPage from './MainPage';

class BooksApp extends React.Component {
  state = {

   books:[]

  }
  // fetch the books from backend and then send it into SearchBooks
  componentDidMount(){
    BooksAPI.getAll()
      .then((books)=>{
        this.setState(()=>({
          books: books
          
        }))
      })
  }

  UpdateShelf=()=>{

  }


  render() {
    return (
      <div className="app">

      <Route exact path='/' render={()=>(<MainPage />)}/>

        <Route  path='/search' render={() => 
        (<SearchBooks books={this.state.books} />)} />

      </div>
    )
  }
}

export default BooksApp
