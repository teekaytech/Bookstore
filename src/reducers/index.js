import { combineReducers } from 'redux';
import booksReducer from './book';
// import filter from './filter';

const rootReducer = combineReducers({ books: booksReducer });

export default rootReducer;
