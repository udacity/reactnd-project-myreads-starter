import React, { Component } from 'react'

class Book extends Component {
    render(){
        let title = this.props.title;
        let author = this.props.author;
        
        return (
            <div className='book'>
                <div className="book-top">
                    {/*book cover to be inserted in style*/}
                    <div className="book-cover"></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            {/*other options*/}
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        );
    }
        
}

export default Book