import React, {Component} from 'react';
import BookButton from './BookButton';


class BookCard extends Component {
    
    componentWillUpdate() {
        this.props.updateShelf(this.book)
    }

render(){
    const { book, bookUpdate } = this.props;
    const cover = book.imageLinks.thumbnail;
        return (
            <div className="column">
                <div className="card book-card has-background-danger is-bold has-text-white" id={book.id}>
                    <div className="card-image">
                        <figure className="image book-cover"> 
                            <img src={cover} alt="book cover" />
                        </figure>                    
                    </div>
                    <div className="card-content">
                        <div className="content book-info ">                    
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
                        ref={this.select}                   
                        onBookUpdate={() => {
                    bookUpdate(this.bookId, this.select)
                    this.updateShelf(book)
                    }}  />
                </div>
            </div>
            </div>
            </div>
            
        )
    }
}


export default BookCard