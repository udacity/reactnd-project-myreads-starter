import React, { Component } from 'react'

const Cover = props => (
    <div className="book-cover" style={{ 
        width: 128, 
        height: 193, 
        backgroundImage: `url(${props.cover})` }}></div>

)

class Book extends Component {
    state = {  }
    render() {
        return (
            <div className="book">
                <div className="book-top">
                <Cover cover={this.props.book.coverImg}/>
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
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
        </div>
        )
    }
}

export default Book