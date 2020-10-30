import { combineReducers } from 'redux';
import booksReducer from './book';
import filter from './filter';

const rootReducer = combineReducers({ books: booksReducer, filter });

export default rootReducer;
