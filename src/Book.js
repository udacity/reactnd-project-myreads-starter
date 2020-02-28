import React, {Component} from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  render() {
    const {imageLinks, shelf, title, authors} = this.props.book
    const {onShelfChange, myBooks} = this.props
    
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${imageLinks !== undefined && imageLinks.thumbnail})`}}></div>
          <ShelfChanger book={this.props.book} myBooks={myBooks} shelf={shelf} onShelfChange={onShelfChange}/>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors !== undefined && authors.map((author) => <div key={author}>{author}</div>)}</div>
      </div>
    )
  }
}

export default Book