import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, filter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

class BooksList extends Component {
  handleRemoveBook = book => {
    const { removeBook } = this.props;
    removeBook(book);
  };

  handleFilterChange = category => {
    const { handleFilter } = this.props;
    handleFilter(category);
  }

  filterBooks = (filter, books) => (filter === '' ? books : books.filter(book => book.category === filter))

  render() {
    const { books, filter } = this.props;
    const filteredBooks = this.filterBooks(filter, books);

    const bookList = filteredBooks.map(book => (
      <Book
        book={book}
        handleRemoveBook={this.handleRemoveBook}
        key={Math.random()}
      />
    ));

    return (
      <div>
        <CategoryFilter bookFilter={this.handleFilterChange} />
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{bookList}</tbody>
        </table>
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  handleFilter: category => {
    dispatch(filter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
