import React, { Component } from 'react'

class Book extends Component {
  handleChange = (e) => {
    const value = e.target.value;
    if(this.props.updateShelf) {
      this.props.updateShelf(this.props.id,value);
    }
  }


  render() {
    const {cover, title, authors, shelf} = this.props;

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{backgroundImage: `url(${cover})` }}></div>
            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
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