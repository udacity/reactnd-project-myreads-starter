import React from 'react'
import './App.css'

class Book extends React.Component {

     UpdateShelf=(event)=>{
       event.preventDefault();
         this.props.UpdateShelfBook(this.props.book, event.target.value)
    }

render(){
    const { title, authors, imageLinks, shelf}=this.props
    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 192,
                    backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : ""} )`
                }}>
                </div>
                <div className="book-shelf-changer">
                    <select value={shelf===undefined?"none":shelf} onChange={this.UpdateShelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading" >Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{`${authors ? authors : ""}`}</div>
        </div>
    );
}

}

export default Book;
