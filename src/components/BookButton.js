import React, {Component} from 'react';
import PropTypes from 'prop-types';



class BookButton extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookUpdate: PropTypes.func.isRequired,
  };

//  componentDidMount(){
  //  this.setState({currentShelf: this.props.book.shelf})

//  }
  

// getShelf = (bookId) => { }

    bookUpdate = (event) => {      
      this.props.bookUpdate(this.props.book, event.target.value)
      this.setState({currentShelf: event.target.value})
    };
  

  render() {
    const {book} = this.props;
    // const currentShelf = this.state;
    return (
           <div className="book-shelf-changer has-background-dark is-bold has-text-white">
        <select 
        book={book}
        value={this.props.currentShelf} 
        onChange={this.bookUpdate} 
        >          
          <option value="move" disabled>Move book to a new shelf...</option>         
          <option value="none">None</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>          
        </select>
      </div>
    );
  }
}
BookButton.defaultProps = {
  currentShelf: 'none',  
}

export default BookButton;