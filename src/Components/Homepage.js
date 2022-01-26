import React, {Component} from 'react';
import Shelf from './Shelf';
import Plusbtn from './Plusbtn';
import * as BooksAPI from './BooksAPI' // I removed the comment from this line


class Homepage extends Component{
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
        booksArr:[]
      }
      // here i'm using componentDidMount() and getAll() to get the books array and assign it to setState().
      componentDidMount() {
        BooksAPI.getAll().then((booksArr) =>{
          this.setState({booksArr})
          console.log("xxs",booksArr)
        })
    }
    render(){
        const allBooksArr = this.props.allBooksArr;
        console.log("sdvb",allBooksArr)
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {/* here it refrences to the Shelf.js react component I created to ease the code readability */}
              <Shelf title = "Currently Reading" />
              <Shelf title = "Want To Read" />
              <Shelf title = "Read" />
            </div>
            <Plusbtn/> {/* here I did the same thing with the Plus button */}
          </div>
        )
    }
}


export default Homepage
