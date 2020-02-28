import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  static propTypes= {
    myBooks: PropTypes.array,
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  state = {
    changed: false
  }
  
  render() {
    const {imageLinks, shelf, title, authors} = this.props.book
    const {onShelfChange, myBooks} = this.props

    const onBookMove = (shelf) => {
      if (shelf !== undefined) {
        this.setState((prevState) => ({
          changed: !prevState.changed
        }))
      }
    }

    return(
      <div className="book">
        <div className="book-top">
          <div className='book-cover' style={{width: 128, height: 193, backgroundImage: `url(${imageLinks !== undefined && imageLinks.thumbnail})`}}></div>
          <ShelfChanger book={this.props.book} myBooks={myBooks} shelf={shelf} onShelfChange={onShelfChange} onBookMove={onBookMove}/>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.map((author) => <div key={author}>{author}</div>)}</div>
      </div>
    )
  }
}

export default Book