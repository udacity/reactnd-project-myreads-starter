import React, { Component } from 'react'


class BookItem extends Component {

  getBookShelf(foundBook, allBooks){
    let myBook
    if (allBooks) {
      myBook = allBooks.find(item => {
        return item.id === foundBook.id
      })
    }

    let isOwened = ((myBook !== undefined) ? true : false)

    let shelfValue = isOwened ? myBook.shelf : "none"

    return shelfValue

  }

  render() {
    let { book , changeSelf, allBooks} = this.props
    console.log("all books")
    console.log(allBooks)


    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(e) =>{ changeSelf(book,e.target.value)}} value = {this.getBookShelf(book,allBooks)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
        </div>
      </li>
    )
  }
}

export default BookItem
