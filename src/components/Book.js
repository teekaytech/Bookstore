import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, handleRemoveBook } = props;

  return (
    <tr className="book">
      <div className="partition-1">
        <div>
          <p className="cat">{book.category}</p>
          <h2 className="title">{book.title}</h2>
          <span className="author">JRR Tolkien</span>
          <ul>
            <li>Comment</li>
            <li>
              {' '}
              <button
                className="remove-btn"
                type="submit"
                onClick={() => handleRemoveBook(book)}
              >
                Remove Book
              </button>
            </li>
            <li>Edit</li>
          </ul>
        </div>
      </div>
      <div className="partition-2">
        <div className="oval" />
        <div className="details">
          <p className="percent">64%</p>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="partition-3">
        <h5 className="mini-h5">CURRENT CHAPTER</h5>
        <p className="chapter">Chapter 17</p>
        <button type="button" className="update-btn">
          UPDATE PROGRESS
        </button>
      </div>
    </tr>
  );
};

Book.propTypes = {
  handleRemoveBook: PropTypes.func.isRequired,
  book: PropTypes.exact({
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
