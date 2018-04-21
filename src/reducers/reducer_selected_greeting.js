export default (state = {}, action) => {
  switch(action.type) {
    case 'SELECT_LANGUAGE':
      return action.payload;
  }
  return state;
}
