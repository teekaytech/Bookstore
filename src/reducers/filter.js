const filter = (state = { filter: 'All' }, action) => {
  if (action.type === 'CHANGE_FILTER') {
    const newFilter = action.category === 'All' ? '' : action.category;
    return newFilter;
  }
  return state;
};

export default filter;
