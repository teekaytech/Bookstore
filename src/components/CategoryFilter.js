import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CategoryFilter extends Component {
  handleFilterChange = category => {
    const { bookFilter } = this.props;
    bookFilter(category);
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

    const { filter } = this.props;

    return (
      <div>
        <select
          name="category"
          onChange={e => {
            this.handleFilterChange(e.target.value);
          }}
          value={filter}
        >
          {catList}
        </select>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  bookFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps, null)(CategoryFilter);
