import React from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends React.Component {
  moveBook = (event) => {
    if(this.props.shelf !== event.target.value){
      console.log(`Moveu o livro "${this.props.title}" para a estante ${event.target.value}`)
      BooksAPI.update(this.props, event.target.value);
      this.props.moveBookshelf(this.props.id,event.target.value);
    }
  }

  render(){
    const { id, title, cover, authors,shelf} = this.props;
    return (
      <div key={id} className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage:`url(${cover})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.moveBook} value={shelf}>
              <option disabled>Move to...</option>
              <option value="currentlyReading" >Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        {authors && <div className="book-authors">
          {authors.map((author) =>(`${author},`))}
        </div>
        }
      </div>
    );
  }
}

export default Book;
