import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BookShelfOptions = (props) => {
    
    const handleChangeShelf = (event) => {
        props.onShelfOptionChange(props.book, event.target.value)
    }

    // render() {

        const { book, books } = props;
        let shelfCategory = 'none';

        for (let bookItem in books){
            if(bookItem.id === book.id){
                shelfCategory = bookItem.shelf;
                break;
            }
        }

        return (
            <div className='book-shelf-container'>
                <select defaultValue={shelfCategory} onChange={handleChangeShelf} >
                    <option value="move" disabled>Move to...</option>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='none'>None</option>
                </select>
            </div> 
        )
    // }
}

export default BookShelfOptions;