import React from 'react';
import BooksGrid from '../../components/Booksgrid/';
import './styles.css';

const Bookshelf = ({ shelf, updateBook }) => {
	const { title, books } = shelf;

	return (
		<div className="list-books-content">
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{title}</h2>
					<div className="bookshelf-books">
						<BooksGrid books={books} updateBook={updateBook} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Bookshelf;
