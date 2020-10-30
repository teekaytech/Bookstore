import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, handleRemoveBook } = props;

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="submit" onClick={() => handleRemoveBook(book)}>
          Remove Book
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  handleRemoveBook: PropTypes.func.isRequired,
  book: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
