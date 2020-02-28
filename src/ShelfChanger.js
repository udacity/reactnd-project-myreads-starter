import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    myBooks: PropTypes.array,
    shelf: PropTypes.string,
    onShelfChange: PropTypes.func.isRequired,
    onBookMove: PropTypes.func.isRequired
  }

  state = {
    shelf: ''
  }

  shelfChange = (myBooks, book) => {
    if (book.shelf === undefined) {
      this.setState({
        shelf: 'none'
      })
    }
    if (book.shelf !== undefined) {
      this.setState({
        shelf: book.shelf
      })
    } else {
      myBooks.forEach((x) => {
        if (x.id === book.id) {
          this.setState({
            shelf: x.shelf
          })
        }
      })
    }
  }

  componentDidMount() {
    const {myBooks, book} = this.props
    this.shelfChange(myBooks, book)
  }

  componentDidUpdate(prevProps) {
    const {myBooks, book} = this.props
    if (prevProps.myBooks !== myBooks) {
      this.shelfChange(myBooks, book)
    }
  }

  handleChange = (event) => {
    const {value} = event.target
    this.props.onShelfChange(this.props.book, value)
    this.props.onBookMove(value)
  }

  render() {
    const {shelf} = this.state
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={shelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger