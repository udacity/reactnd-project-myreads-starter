import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchPage';
import MainPage from './MainPage';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {

   books:[]

  }
  // fetch the books from backend and then send it into SearchBooks
  componentDidMount(){
    BooksAPI.getAll()
      .then((books)=>{
        this.setState(()=>({
          books
          
        }))
      })
  }

  UpdateShelf=()=>{

  }


  render() {
    return (
      <div className="app">

      <Route exact path='/' render={()=>(<MainPage />)}/>

        <Route exact path='/search' render={() => 
        (<SearchBooks books={this.state.books} />)} />

      </div>
    )
  }
}

export default BooksApp
