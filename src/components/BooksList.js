import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books }) => {
  const bookList = books.map(book => (
    <Book book={book} removeBook={removeBook} key={Math.random()} />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove Book</th>
        </tr>
      </thead>
      <tbody>{bookList}</tbody>
    </table>
  );
};

removeBook = id => {
  const { removeBook } = this.props;
  removeBook(id);
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,

});

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
