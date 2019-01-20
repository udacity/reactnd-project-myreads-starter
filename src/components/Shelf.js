import React from "react";
import Book from "./Book";

function Shelf(props) {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{props.shelfTitle}</h2>
			<div className="bookshelf-books">
				<div className="books-grid">
					<ol className="books-grid">
{/* ---- Passes books and filters depending on shelf to display the UI with a map method ----- */}
						{props.books
							.filter(book => book.shelf === props.shelf)
							.map(book => (
								<li key={book.id}>
									<Book
										book={book}
										updateShelf={props.updateShelf} />
								</li>
							))}
					</ol>
				</div>
			</div>
		</div>
	);
}

export default Shelf;
