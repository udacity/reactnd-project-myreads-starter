import React from 'react';

function BookShelfChanger(props) {
	const { handleShelfChange, currentShelf, bookId } = props;

	return (
		<div className="book-shelf-changer">
			<select value={ currentShelf } onChange={ e => handleShelfChange(e, bookId) }>
			<option value="move" disabled>Move to...</option>
			<option value="currentlyReading">Currently Reading</option>
			<option value="wantToRead">Want to Read</option>
			<option value="read">Read</option>
			<option value="none">None</option>
			</select>
		</div>
	);
}

export default BookShelfChanger;