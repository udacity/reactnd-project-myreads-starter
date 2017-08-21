import React, {Component} from 'react';

/**
 * Book component, intended to be reused across the application
 */
class Book extends Component{

    render(){
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url('+this.props.coverUrl+')' }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>
        );
    }
}

export default Book;