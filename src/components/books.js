import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './shelf';




class Books extends React.Component{

  
   

    render() {
        return(
        <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail}")`}}></div>
                <div className="book-shelf-changer">
                  <select onChange={this.props.book.shelf || "none"} onChange={(e) =>(this.props.updateBook(this.props.book, e.target.value))} >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>     
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.book.title}</div> 
             <div className="book-authors">{this.props.book.authors && this.props.book.authors[0] || "No Author..."}</div>
            </div>
          </li>


          // For the className="book-cover" and "className="book-authors", I utilized code from Ryan Waite's FEND Project 6 Walk Through
        );


    }


}


export default Books

//Reference use: Ryan Waite's FEND Project 6 Walk Through at: https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
//Udacity Classroom: Bulding With React