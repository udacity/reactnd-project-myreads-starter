import React, {Component} from 'react';
import BookButton from './BookButton';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

class BookCard extends Component {
static propTypes = {
    bookUpdate: PropTypes.func.isRequired,
}
constructor(props){
    super(props);
    this.state = { 
        shelf: this.props.book.shelf,
        currentShelf: '',
        cover: '',
      }
      BooksAPI.get(this.props.book.id)
      .then(book => this.setState({currentShelf: book.shelf}))
  }
  componentDidMount() {
    this.setState({cover: this.props.book.imageLinks && this.props.book.imageLinks.thumbnail})    
  }

render(){
    const { book, bookUpdate, resultBooks, ...other} = this.props;
    
        return (
                <div className="card book-card has-background-danger is-bold has-text-white" id={book.id}>
                    <div className="card-image">
                        <figure className="image book-cover"> 
                            <img src={this.state.cover} alt="book cover" />
                        </figure>                    
                    </div>
                    <div className="card-content">
                        <div className="content book-info">
                        <span className="book-title has-text-white">{book && book.title.slice(0,50)}</span>
                        <hr className="book-info-line" />                                                                                          
                        <span className="author-label has-text-white">By:</span>
                             {book.authors &&
                                    book.authors.map((author, index) => (
                                <p className="book-author has-text-white" key={index}>
                                    {author}
                                    </p>
                            ))}                                  
                        <BookButton 
                        className="book-button" 
                        book={book}                                         
                        bookUpdate={bookUpdate}                                             
                        // shelf={this.props.shelf}
                        currentShelf={this.state.currentShelf}
                        {...other}
                        />
                </div>
            </div>
            </div>
            
        )
    }
}

export default BookCard