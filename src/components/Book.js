import React, {Component} from "react";
import PropTypes from 'prop-types'

class Book extends Component {

    static propTypes = {
      smallThumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      onMoveBook: PropTypes.func.isRequired
    }
    render () {
        return (

            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${ this.props.smallThumbnail }")` }}></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading" onChange={(event) => this.props.onMoveBook(event.target.value)}>Currently Reading</option>
                    <option value="wantToRead" onChange={(event) => this.props.onMoveBook(event.target.value)}>Want to Read</option>
                    <option value="read" onChange={(event) => this.props.onMoveBook(event.target.value)}>Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.authors}</div>
            </div>

        )
    }
}

export default Book