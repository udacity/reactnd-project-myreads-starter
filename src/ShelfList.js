import React, {Component} from "react";
import Shelf from "./Shelf";
import * as BooksAPI from "./BooksAPI.js"

class ShelfList extends Component{

    state={
        books: []
    }

    componentDidMount(){
        BooksAPI.getAll()
            .then((books)=>{
                this.setState(()=>({
                        books: books
                    }
                ))})}


    render(){
        const shelves =[
            {books: this.state.currentlyReading, title:"Currently Reading"},
            {books: this.state.wantToRead, title: "Want To Read"},
            {books: this.state.read, title: "Read"}
        ];

        return(

            <div className="list-books-content">
                <div>
                    {shelves.map((shelf)=>(
                    <Shelf books={shelf.books} title={shelf.title}/>)
                    )}

                </div>
            </div>


        )
    }

}

export default ShelfList