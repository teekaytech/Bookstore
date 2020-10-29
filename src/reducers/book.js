const booksReducer = (state = [], action) => {
  if (action.type === 'CREATE_BOOK') {
    const newBooks = [...state, action.book];
    return newBooks;
  }
  if (action.type === 'REMOVE_BOOK') {
    const newBooks = state.books.filter(book => book.id !== action.book.id);
    return [
      ...state,
      newBooks,
    ];
  }
  return state;
};

export default booksReducer;
