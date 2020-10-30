import { combineReducers } from 'redux';
import booksReducer from './book';

const rootReducer = combineReducers({ books: booksReducer });

export default rootReducer;
