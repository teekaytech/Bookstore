import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => {
  const bookList = books.map(book => (
    <Book book={book} key={Math.random()} />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>{bookList}</tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,

});

export default connect(mapStateToProps, null)(BooksList);
