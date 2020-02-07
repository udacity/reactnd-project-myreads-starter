import React from 'react'
import BookItem from './BookItem'


class ShelfBooks extends React.Component {
    render() {
        const { bookList, allBooks } = this.props;
        console.log('my shelf book marker')
        console.log(bookList)
        let bookItem = bookList.map( key=>{
            return(
                <BookItem />
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