import React, { Component } from 'react';

class ShelfSelector extends Component {
    render() {
        const { book, onBookMoved } = this.props;
        return (
            <div className="book-shelf-changer">
                <select
                    value={ book.shelf || "none" }
                    onChange={ onBookMoved(book) }>
                    
                    <option disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to read</option>
                    <option value="alreadyRead">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default ShelfSelector;