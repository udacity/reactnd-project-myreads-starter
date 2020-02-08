import React from 'react'
import BookItem from './BookItem'


class ShelfBooks extends React.Component {
    render() {
        const { bookList, allBooks,changeSelf } = this.props;
        console.log('my shelf book marker')
        console.log(bookList)
        let bookItem = bookList.map( book => {
            console.log("create book ")
            console.log(book)

            return(
                <BookItem  
                key={book.id}
                book={book}
                changeSelf={changeSelf}
                />
            )
        })

        

        return (
            <ol className="books-grid">
                {bookItem}
            </ol>

        )
    }

}
export default ShelfBooks