import React from 'react';
import { Link } from 'react-router-dom';
import Books from './books';


class Shelf extends React.Component{

    render() {
        return(           
     
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((book,key) => <Books updateBook={this.props.updateBook} book={book} key={key} />)
                
                }
              </ol>
            </div>
          </div>
       
         

        );

    }


}


export default Shelf

//References use: Ryan Waite's FEND Project 6 Walk Through at: https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
//Udacity Classroom: Bulding With React