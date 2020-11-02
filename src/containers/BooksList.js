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
      <div className="main-div">
        <div className="header">
          <div className="header-items">
            <p className="cms">BOOKSTORE CMS</p>
            <div className="books"><p>BOOKS</p></div>
            <div className="select">
              <div className="category">Categories</div>
              <CategoryFilter bookFilter={this.handleFilterChange} />
            </div>
          </div>
          <div className="user-icon">
            <div><i className="fa fa-user-o" aria-hidden="true" /></div>
          </div>
        </div>
        <div className="books-table">
          <table>
            <thead />
            <tbody>{bookList}</tbody>
          </table>
        </div>
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
