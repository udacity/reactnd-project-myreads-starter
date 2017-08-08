import React, { Component } from 'react'

class Book extends Component {
    render(){
        return (
            <div className='book'>
                <div className="book-top">
                    <div className="book-cover"></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            <!-- other options --!>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.author}</div>
            </div>
        );
    }
        
}

export default Book