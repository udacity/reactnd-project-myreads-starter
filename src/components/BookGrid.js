/**
 * Created by jansplichal on 03/08/2017.
 */

import React, { Component } from 'react';
import Book from './Book';

class BookGrid extends Component {
    render(){
        return (
            <ol className="books-grid">
                <li>
                    <Book />
                </li>
            </ol>
        );
    }
}

export default BookGrid;
