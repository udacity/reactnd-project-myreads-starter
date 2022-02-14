import React, { Component } from 'react'
class Book extends Component{
  state = {
    value:this.props.book.shelf, 
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.onShelfUpdate(this.props.book, event.target.value);
  }
  render(){
    const { title, authors, imageLinks } = this.props.book;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{width: 128,
                      height: 193,
                      backgroundImage: `url(${imageLinks && imageLinks.thumbnail})`
                    }}>
            </div>
            <div className="book-shelf-changer">
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}
export default Book