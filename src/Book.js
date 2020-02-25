import React, {Component} from 'react'
import ShelfChanger from './ShelfChanger'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  state = {
    book: {}
  }

  componentDidMount() {
    BooksAPI.get(this.props.book.id)
      .then((book) => {
        this.setState(() => ({
          book
        }))
      })
  }

  render() {
    const {imageLinks, shelf, title, authors} = this.state.book
    
    return(
      <div className="book">
      {console.log(this.state.book)}
        <div className="book-top">
          <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${imageLinks !== undefined && imageLinks.thumbnail})`}}></div>
          <ShelfChanger shelf={shelf}/>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors !== undefined && authors.map((author) => <div key={author}>{author}</div>)}</div>
      </div>
    )
  }
}

export default Book