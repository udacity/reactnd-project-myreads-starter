import React from 'react';
import PropTypes from 'prop-types';
import {SHELVES} from '../utils/Enuns';
import {Link} from 'react-router-dom';

const options = [
    {display: 'Move to...', value: 'none', disabled: true},
    {display: 'Currently Reading', value: SHELVES.CURRENTLYREADING},
    {display: 'Want to Read', value: SHELVES.WANTTOREAD},
    {display: 'Read', value: SHELVES.READ},
    {display: 'None', value: 'none'}
];

const Book = (props) => (
    <div className='book'>
        <div className='book-top'>
            <Link className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${props.book.imageLinks.thumbnail})`
            }} to={`/book/${props.book.id}`}/>
            <div className='book-shelf-changer'>
                <select
                    onChange={(evt) => {
                        props.onChangeShelf(props.book, evt.target.value)
                    }}
                    value={props.book.shelf}>
                    {options.map((o, idx) => (
                        <option
                            value={o.value}
                            key={`opt-${idx}`}
                            disabled={o.disabled}
                            className={(o.value === props.book.shelf && 'book-shelf-selected')}>
                            {o.display}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        <div className='book-title'>{props.book.title}</div>
        <div className='book-authors'>{props.book.authors && props.book.authors.join(", ")}</div>
    </div>
);

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
};
export default Book;