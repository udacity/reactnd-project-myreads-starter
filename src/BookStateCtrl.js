import React, { Component } from 'react'

class BookStateCtrl extends Component {

	updateBookState = (value) => {
		if(this.props.onBookStateChange)
			this.props.onBookStateChange(value)
	}

	render() {
		let selectId = "select_" + this.props.bookId;
		 let options = [
			{value:"currentlyReading", text:"Currently Reading"},
			{value: "wantToRead", text: "Want to Read"},
			{value: "read", text: "Read"},
			{value: "none", text: "None"}
		];
		return <div className="book-shelf-changer">
                  <select value={this.props.bookState} onChange={(event) => this.updateBookState(event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    {options.map((bookOption) => 
                    	<option key={bookOption.value} value={bookOption.value}>{bookOption.text}</option>
                    	)}
                  </select>
                </div>
	}
}

export default BookStateCtrl