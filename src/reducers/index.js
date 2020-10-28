import { combineReducers } from 'redux';
import books from './book';
// import filter from './filter';

const rootReducer = combineReducers({ books });

export default rootReducer;
