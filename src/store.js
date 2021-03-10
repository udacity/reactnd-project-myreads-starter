import { createStore ,combineReducers } from 'redux';
import { bookReducers } from './reducers/bookReducers';

const store = createStore(combineReducers({ bookReducers }));
const books = store.subscribe(()=> {
    const { books} = store.getState();
    return books;
});
/*
store.subscribe(()=> {
    const { books } = store.getState();
    console.log('from store',books)
});
*/

export  {store, books};