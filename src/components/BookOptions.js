import React, { Component } from 'react';

class BookOptions extends Component {
    state = {}
    render() {
        return (
            <select>
                <option value="move" disabled>Move to...</option>
                <option 
                    value="currentlyReading"
                    onClick={null}>Currently Reading</option>
                <option 
                    value="wantToRead"
                    onClick={null}>Want to Read</option>
                <option 
                    value="read"
                    onClick={null}>Read</option>
                <option value="none">None</option>
            </select>
        );
    }
}

export default BookOptions;