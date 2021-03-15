import React from 'react';
import { Book } from './Book';
export default function Shelf(props) {
    const { books } = props;

    return (                 
            <Book books={books} />
                

    )
}