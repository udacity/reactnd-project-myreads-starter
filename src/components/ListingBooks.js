import React from "react"
class ListingBooks extends React.Component{
  
    render(){
        const{books,updateShelf,currentShelf}=this.props
             let thumbnail
        if (books.imageLinks) {
            thumbnail = books.imageLinks.thumbnail
        } else {
            thumbnail = ''
        }
    return(
        <div className="list-books">
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select   
                              onChange={(event) => updateShelf(books, event.target.value)}
                              value={currentShelf}
                              >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading"  >Currently Reading</option>
                                <option value="wantToRead" >Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{books.title}</div>
                          <div className="book-authors">{books.authors}</div>
                        </div>
                    </div>
         
    )
                      }

    
}
export default ListingBooks;