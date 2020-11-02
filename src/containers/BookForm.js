import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    const { createBook } = this.props;
    event.preventDefault();
    createBook(this.state);
    this.setState({ title: '', category: '' });
  }

  handleChange = e => {
    this.setState({
      id: Math.floor(Math.random() * 50),
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const categories = [
      'select',
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    const catList = categories.map(cat => (
      <option key={Math.random()} value={cat}>
        {cat}
      </option>
    ));

    const { title, category } = this.state;

    return (
      <div className="book-form-div">
        <hr className="hr" />
        <h3 className="new-book-title">ADD NEW BOOK</h3>
        <form onSubmit={this.handleSubmit} className="book-form">
          <label htmlFor="title">
            <input placeholder="Book Title" className="form-title" name="title" type="text" onChange={this.handleChange} value={title} />
          </label>

          <select name="category" onChange={this.handleChange} value={category} className="select-cat">
            {catList}
          </select>
          <button type="submit" className="add-book-btn">Add book</button>
        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => { dispatch(createBook(book)); },
});

export default connect(null, mapDispatchToProps)(BookForm);
