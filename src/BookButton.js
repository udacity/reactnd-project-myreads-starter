import React, {Component} from 'react';
import PropTypes from 'prop-types';



class BookButton extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookUpdate: PropTypes.func.isRequired,
    currentShelf: PropTypes.object.isRequired,
    resultBooks: PropTypes.array.isRequired,
  };

  state = {
    currentShelf: '',
  }

  componentDidMount(){
    this.setState({currentShelf: this.props.book.shelf})
  }

//  setShelf = (shelf) => {
//    shelf = this.props.book.shelf
//    this.setState({currentShelf: {shelf}})
//  }

    bookUpdate = (event) => {      
      this.props.bookUpdate(this.props.book, event.target.value)
      this.setState({currentShelf: event.target.value})

  };


  render() {
    const {book, currentShelf} = this.props;

    return (
      <div className="book-shelf-changer has-background-dark is-bold has-text-white">
        <select 
        book={book}
        value={currentShelf} 
        onChange={this.bookUpdate}>          
          <option value="">None</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>          
        </select>
      </div>
    );
  }
}

export default BookButton;