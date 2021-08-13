import React, { Component} from "react";
import * as BooksAPI from './BooksAPI.js';

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
        const values = ["currentlyReading", "wantToRead", "read", "none"];
        const book = this.props

        return(
            <div className="book-shelf-changer">
                <select
                    value={this.state.value}
                    onChange={this.handleChange}
                    defaultValue={book.shelf}>
                    <option
                        value="move"
                        disabled>Move to...
                    </option>
                {values.map((value, index)=>(
                    <option value={value}
                            key={index}>{value}
                    </option>
                ))}
                </select>
            </div>

        )
    }

}

export default MoveTo;