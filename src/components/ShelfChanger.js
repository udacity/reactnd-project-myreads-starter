/**
 * Created by jansplichal on 03/08/2017.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
    render() {
        const {shelf, onShelfChange, bookId} = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => (onShelfChange(bookId, event.target.value))} value={shelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

ShelfChanger.propTypes = {
    shelf: PropTypes.oneOf(['currentlyReading', 'wantToRead', 'read', 'none']).isRequired,
    bookId: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
};

export default ShelfChanger;
