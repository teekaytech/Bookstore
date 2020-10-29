import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    // eslint-disable-next-line react/prop-types
    const { createBook } = this.props;
    event.preventDefault();
    createBook(this.state);
    event.target.reset();
  }

  handleChange = e => {
    this.setState({
      id: Math.random(),
      [e.target.name]: e.target.value,
    });
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
/* eslint-disable */
    const catList = categories.map(cat => (
      <option key={Math.random()} value={cat}>
        {cat}
      </option>
    ));

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title
            <input name="title" type="text" onChange={this.handleChange} />
          </label>

          <select name="category" onChange={this.handleChange} value={this.state.category}>
            {catList}
          </select>
          <button type="submit">Add book</button>
        </form>
      </div>
    );
  }
}
/* eslint-enable */
const mapDispatchToProps = dispatch => ({
  createBook: book => { dispatch(createBook(book)); },
});

export default connect(null, mapDispatchToProps)(BookForm);
