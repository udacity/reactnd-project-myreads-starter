import React from 'react';
import BookShelfChanger  from './BookShelfChanger';


function BookShelf(props){
	const { shelves } = props
	return (
		<div>
			{
				shelves.map((shelf, index)=>(
					<div className="bookshelf" key={ index }>
						<h2 className="bookshelf-title">{shelf.title}</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								{
									shelf.books.map((book, index) => {
										return (
											<li key={index}>
												<div className="book">
													<div className="book-top">
														<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.bookCoverUrl}")` }}></div>
														<BookShelfChanger />
													</div>
													<div className="book-title">{book.bookTitle}</div>
													<div className="book-authors">{book.bookAuthors}</div>
												</div>
											</li>
										)
									})
								}
							</ol>
						</div>
					</div>
				))
			}
		</div>
	);
}

export default BookShelf;