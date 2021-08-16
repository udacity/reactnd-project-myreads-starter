import React, { Component} from "react";
import * as BooksAPI from './BooksAPI.js';
// import select from 'react-select';

class MoveTo extends Component{

    handleChange=(event)=>{
        event.preventDefault();
        if(this.props.onUpdateBook){
            this.props.onUpdateBook(this.props.book, event.target.value)
        }
    }

    render() {
        const {book, shelf} = this.props

        return(
            <div className="book-shelf-changer">
                <select
                    value={shelf}
                    onChange={this.handleChange}
                    >
                <option disabled>Move To...</option>
                <option value={"currentlyReading"}>Currently Reading</option>
                <option value={"wantToRead"}>Want To Read</option>
                <option value={"read"}>Read</option>
                <option value={"none"}>None </option>
                </select>
            </div>

        )


    }

}

export default MoveTo;
// const values = [{shelfValue: null, name:"Move To...", id: 0},
//     {shelfValue:"currentlyReading", name:"Currently Reading", id:1},
//     {shelfValue:"wantToRead", name:"Want To Read", id:2},
//     {shelfValue:"read", name:"Read", id:3},
//     {shelfValue:"none", name:"None", id:4},
// ]

// {values.map((value)=>{
//     return(
//         <option value={value.shelfValue}
//                 key={value.id}
//                 disabled={value.id===0}
//         >{value.name}
//         </option>
//     )
// })}