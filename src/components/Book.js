import React from "react";
import ShelfSelector from "./ShelfSelector";

function Book(props) {
	const style = {
		width: 128,
		height: 188,
		backgroundImage: props.book.imageLinks
			? props.book.imageLinks.thumbnail
			: "https://raw.githubusercontent.com/artnerdnet/reactnd-project-myreads-starter/searchFeature/src/img/default-cover.png"
	};


	return (
		<div className="book">
			<div className="book-top">
				<div className="book-cover" style={style}>
					<img
						src={style.backgroundImage}
						style={style}
						alt={props.book.title}
					/>
				</div>
				<div className="book-shelf-changer">
					<ShelfSelector
						updateShelf={props.updateShelf}
						book={props.book}
					/>
				</div>
			</div>
			<div className="book-title">{props.book.title}</div>
			<div className="book-author"> {props.book.authors ? props.book.authors.join(' & ') : ''}</div>
		</div>
	);
}

export default Book;