import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class CategoryFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'all',
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const categories = [
      'All',
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

    const { category } = this.state;

    return (
      <div>
        <select name="category" onChange={this.handleFilterChange} value={category}>
          {catList}
        </select>
      </div>
    );
  }
}

export default CategoryFilter;
