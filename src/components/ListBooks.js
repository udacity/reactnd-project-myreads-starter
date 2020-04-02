import React from 'react'
import bookPreloader from '../bookPreloader.gif';
import searchPreloader from '../searchPreloader.gif';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListBooks extends React.Component {


    //Handling user selection to move book from one shelf to another
    handleBookMove=(event,book)=>{
        const targetShelf=event.target.value.trim();
        this.props.handleBookMove(targetShelf,book);
    }

    //Setting up prop types structure
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookShelves: PropTypes.array.isRequired,
        movingBook: PropTypes.bool.isRequired,
        loadShelvesSpinner: PropTypes.object.isRequired
    }

    render(){

        //Destructuring props from parent component
        const { books, bookShelves, movingBook, loadShelvesSpinner} =this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                {
                    (bookShelves && bookShelves.length>0) && (
                            bookShelves.map((currentShelf,object_key)=>{
                                return (
                                    <div className="bookshelf" key={object_key}>
                                        <h2 className="bookshelf-title">{currentShelf.displayTitle && true && (currentShelf.displayTitle)}</h2>
                                        <div className="bookshelf-books">
                                            
                                            {/*** Loading Shelf spinner before API request completes */}
                                            {(currentShelf.name && loadShelvesSpinner[currentShelf.name]) && (
                                                <div className="book-preloader">
                                                    <img src={bookPreloader}  alt="Books Initial Loader" />
                                                </div>
                                            )}
                                            
                                            {/*** Showing no book message if this no book in current shelf after API request is completed */}
                                            {(currentShelf.name && !loadShelvesSpinner[currentShelf.name])
                                                && (!(books && books.length > 0)
                                                        || (books.filter(book => (book && book.shelf && book.shelf === currentShelf.name)).length < 1)
                                                ) && (
                                                    <div className="no-shelf-book-available alert alert-danger"><p>There are currently no books in this Shelf</p></div>
                                                )
                                            }
                                            
                                            {/*** Loading all available books in shelf after API request is completed no book message if this no book in current shelf */}
                                            <ol className="books-grid">
                                                {(currentShelf.name && !loadShelvesSpinner[currentShelf.name] && books && books.length>0) && (   
                                                    books
                                                    .filter((book)=>{
                                                        return (book && book.shelf && book.shelf===currentShelf.name);
                                                    })
                                                    .map((book,book_key)=>{
                                                        return (
                                                            <li key={book_key}>
                                                                <div className="book">
                                                                    <div className="book-top">
                                                                        <div className="book-cover" style={{backgroundImage:`url(${(book.imageLinks && book.imageLinks.thumbnail)? book.imageLinks.thumbnail:''})`}}></div>
                                                                        <div className="book-shelf-changer">
                                                                        <select onChange={(event)=>this.handleBookMove(event,book)} defaultValue={currentShelf.name}>
                                                                            <option value="move" disabled >Move to...</option>
                                                                            <option value="currentlyReading">Currently Reading</option>
                                                                            <option value="wantToRead">Want to Read</option>
                                                                            <option value="read">Read</option>
                                                                            <option value="none">None</option>
                                                                        </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="book-title">{(book.title)?book.title:''}</div>
                                                                    <div className="book-authors">{(book.authors && book.authors.length > 0) ? book.authors.join(", ") : ''}</div>
                                                                    {(book.previewLink) && (
                                                                        <div className="view-book">
                                                                            <a href={book.previewLink} target="_blank" rel="noopener noreferrer" className="view-book-link">View Book</a>
                                                                        </div>
                                                                    )}
                                                                    
                                                                </div>
                                                            </li>
                                            
                                                        );
                                                    })
                                                        
                                                )}
                                            </ol>
                                            {/*** Loading Shelf spinner before API request completes for moving book */}
                                            {(movingBook) && (
                                                <div className="book-page-move-loader">
                                                    <img src={searchPreloader} alt="Books Move Loader" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                      
                  
                    )
                }
                   
                </div>
                <div className="open-search">
                    <Link to='/search' className="pointer-cursor open-search-btn">
                        Add a book
                    </Link>
                </div>
            </div>
       
        );
    }

}

export default ListBooks;