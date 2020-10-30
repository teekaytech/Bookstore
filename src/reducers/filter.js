const filter = (state = 'lord of the rings', action) => {
  if (action.type === 'CHANGE_FILTER') {
    return action.category;
  }

  return state;
};

export default filter;
