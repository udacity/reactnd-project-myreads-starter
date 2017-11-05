import React from 'react';

class Book extends React.Component {

  constructor(props){
    super(props)
    const { id, title, cover, shelf, authors} = props;
    this.state = {
      id,
      title,
      cover,
      shelf,
      authors
    };
  }

  render(){

    const cover = this.state.cover;
    const authors = this.state.authors;

    return (

      <div className="book">
        LIVRO
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage:`url(${cover})` }}></div>
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
        <div className="book-title">{this.title}</div>
        <div className="book-authors">
          {authors.map((author) =>(`${author},`))}
        </div>
      </div>
    );
  }
}

export default Book;
