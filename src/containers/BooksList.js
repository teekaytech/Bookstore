import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

class BooksList extends Component {
  handleRemoveBook = book => {
    const { removeBook } = this.props;
    removeBook(book);
  };

  render() {
    const { books } = this.props;
    const bookList = books.map(book => (
      <Book
        book={book}
        handleRemoveBook={this.handleRemoveBook}
        key={Math.random()}
      />
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
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,

});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
