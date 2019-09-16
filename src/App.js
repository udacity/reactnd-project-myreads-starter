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
          books
          
        }))
      })
  }

  //it will take every book with select shelf and then update it .
  UpdateShelfBook = (book, shelf)=>{ 
  // the update will works only if the current shelf for book doesn't match 
    { book.shelf!==shelf 
      &&
    BooksAPI.update(book,shelf)
      .then((newdata) => {
       book.shelf =shelf
        this.setState(prevState=>({

          books: prevState.books.filter(s=>s.id!==book.id)
          .concat([book])
        }))  
      })
  }
}
  


  render() {
    return (
     
      <div className="app">

        <Route exact path='/' render={() => (<MainPage books={this.state.books}
         UpdateShelfBook={this.UpdateShelfBook} />)}/>

        <Route  path='/search' render={() => 
          (<SearchBooks books={this.state.books}
         UpdateShelfBook={this.UpdateShelfBook} />)} />

      </div>
    )
  }
}

export default BooksApp
