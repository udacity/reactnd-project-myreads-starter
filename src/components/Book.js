import React, { Component } from 'react'

class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {shelf:'none'}
        this.changeToShelf = this.changeToShelf.bind(this);
    }
    style={
        width: 128,
        height: 188,
        backgroundImage: this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''
    };
/*
    const handleChange = (event) => {
        props.book.shelf= event.target.value })
        console.log(this.state)
      } */


    changeToShelf(event) {
        this.setState({shelf: event.target.value});
        event.preventDefault();
      };

    render() {
        return(
        <div className='book'>
            <div className="book-top">
                <div className="book-cover" style={this.style}>
                <img src={this.style.backgroundImage} style={this.style} alt={this.props.book.title} /></div>
                <div className="book-shelf-changer">
                    <select value={this.state.value} onChange={this.changeToShelf}>
                    <option value="move" disabled>Move to...</option>
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

export default Book;