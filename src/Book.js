import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imageLinks: PropTypes.objectOf(PropTypes.string),
    authors: PropTypes.arrayOf(PropTypes.string),
    shelf: PropTypes.string,
    onUpdate: PropTypes.func
  }

  static defaultProps = {
    shelf: 'none'
  }


  handleChange = (event) => {
    this.props.onUpdate({id: this.props.id}, event.target.value);
  }

  render() {
    const {imageLinks, title, authors, shelf} = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128, height: 193,
            backgroundImage: `url(${imageLinks.thumbnail})`}} />
          <div className="book-shelf-changer">
            <select value={shelf} onChange={this.handleChange} >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        {authors &&
          <div className="book-authors">{authors.join(' and ')}</div>
        }
      </div>
    )
  }
}

export default Book;
