import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */
const Book = props => {
  const { book, removeBook} = props;
  
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="submit" onClick={removeBook}>remove</button></td>
    </tr>
  );
};
/* eslint-enable */

Book.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ).isRequired,
};

export default Book;
