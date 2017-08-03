/**
 * Created by jansplichal on 03/08/2017.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  Bookshelf  from './Bookshelf';

class BookList extends Component {
    render(){
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BookList;

