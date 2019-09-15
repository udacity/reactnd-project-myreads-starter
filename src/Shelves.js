import React from 'react';
import './App.css';



class Shelves extends React.Component {
    
    UpdateShelf = (event) => {
        event.preventDefault();
        this.props.UpdateShelfBook(this.props.book, event.target.value)
    }

    render(){
        const { books}=this.props
        return(
            <ol className="books-grid">{
                books.map(book=>(
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{
                                    width: 128,
                                    height: 192,
                                    backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ""} )`
                                }}>
                                </div>
                                <div className="book-shelf-changer">
                                    <select value={book.helf} onChange={this.UpdateShelf}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading" defaultValue>Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{`${book.authors ? book.authors : ""}`}</div>
                        </div>
                    </li>
                ))
            }
            </ol>
        )
    }
}

export default Shelves;