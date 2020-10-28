import React from 'react';

export default class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
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
    return (
      <div>
        <form>
          <input type="text" />
          <select>
            <option>options</option>
          </select>
          <button type="submit">Add book</button>
        </form>
      </div>
    );
  }
}
