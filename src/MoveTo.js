import React, { Component} from "react";
import * as BooksAPI from './BooksAPI.js';
// import select from 'react-select';

class MoveTo extends Component{

    render() {

        return(
            <div className="book-shelf-changer">

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