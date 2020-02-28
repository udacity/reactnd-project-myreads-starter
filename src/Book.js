import React, {Component} from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  state = {
    changed: false
  }
  
  render() {
    const {imageLinks, shelf, title, authors} = this.props.book
    const {onShelfChange, myBooks} = this.props

    const onBookMove = (shelf) => {
      if (shelf !== undefined) {
        this.setState({
          changed: true
        })
        setTimeout(() => {
          this.setState({
            changed: false
          })
        }, 500)
      }
    }

    let coverStyle = {opacity: 1}
    if (this.state.changed) {
      coverStyle = {boxShadow: "0 3px 4px 0 #dbedf3", opacity: 0.5}
    }

    return(
      <div className="book">
        <div className="book-top">
          <div style={coverStyle}>
          <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${imageLinks !== undefined && imageLinks.thumbnail})`}}></div>
          <ShelfChanger book={this.props.book} myBooks={myBooks} shelf={shelf} onShelfChange={onShelfChange} onBookMove={onBookMove}/>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.map((author) => <div key={author}>{author}</div>)}</div>
      </div>
    )
  }
}

export default Book