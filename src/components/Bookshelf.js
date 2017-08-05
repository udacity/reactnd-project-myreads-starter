/**
 * Created by jansplichal on 03/08/2017.
 */

import React from 'react';
import BookGrid from './BookGrid';
import PropTypes from 'prop-types';

const Bookshelf = ({title, books, onShelfChange}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BookGrid onShelfChange={onShelfChange} books={books}/>
            </div>
        </div>
    )
};

Bookshelf.propTypes = {
    title: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
};

export default Bookshelf;
