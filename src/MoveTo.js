import React, { Component} from "react";
import * as BooksAPI from './BooksAPI.js';
// import select from 'react-select';

class MoveTo extends Component{

    state={
        value : ""
    }

    handleChange=(event)=>{
        event.preventDefault();
        this.setState({
            value: event.target.value
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.value !== prevState.value) {
            BooksAPI.update(this.props.book, this.state.value)
                .then()
        }
    }


    render() {
        const values = [
            {shelfValue:"currentlyReading", name:"Currently Reading", id:1},
            {shelfValue:"wantToRead", name:"Want To Read", id:2},
            {shelfValue:"Read", name:"Read", id:3},
            {shelfValue: "None", name:"None", id:4},
    ]
        const book = this.props

        return(
            <div className="book-shelf-changer">
                <select
                    value={this.state.value}
                    onChange={this.handleChange}
                    >
                    <option value={null}
                            disabled
                            >Move To...</option>
                    {values.map((value)=>(
                        <option value={value.shelfValue}
                                key={value.id}
                                selected={book.shelf}
                        >{value.name}
                        </option>
                    ))}

                </select>
            </div>

        )


    }
// <option value="currentlyReading">Currently Reading</option>
// <option value="wantToRead">Want To Read</option>
// <option value="read">Read</option>
// <option value="none">None</option>
}

export default MoveTo;