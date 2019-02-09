import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Shelf from '../shelf';


class HomePage extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        books: []
     }

    }
    
   
  
 componentDidMount() {
      BooksAPI.getAll().then((resp)=>{
          this.setState({books: resp});
          
          console.log(resp);
      });

      
    }

    updateBook = (book, shelf) => 
    BooksAPI.update(book, shelf).then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  

    render() {

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf updateBook={this.updateBook} name='Currently Reading' books={this.state.books.filter( b => b.shelf === "currentlyReading")} />
              <Shelf updateBook={this.updateBook} name='Want To Read' books={this.state.books.filter( b => b.shelf === "wantToRead")} />
              <Shelf updateBook={this.updateBook} name='Read' books={this.state.books.filter( b => b.shelf === "read")} /> 
            
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        
      
        );
    
  

        
    }


}


export default HomePage

//Reference use: Ryan Waite's FEND Project 6 Walk Through at: https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
//Udacity Classroom: Bulding With React