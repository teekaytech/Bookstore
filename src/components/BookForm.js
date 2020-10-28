import React, { Component } from 'react';
import { connect } from 'react-redux';
import createBook from '../actions/index';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    createBook(this.state);
  }

  handleChange = e => {
    this.setState = {
      id: Math.random,
      [e.target.name]: e.target.value,
    };
  }

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    const {categories} = this.state

    const catList = categories.map(cat => (
      <option key={Math.random()} value={cat}>
        {cat}
      </option>
    ));


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input name="title" type="text" />
          <select name="categories" value={this.categories} onChange={this.handleChange}>
            {catList}
          </select>
          <button type="submit">Add book</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => { dispatch(createBook(book)); },
});

export default connect(null, mapDispatchToProps)(BookForm);
