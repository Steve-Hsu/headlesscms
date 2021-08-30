export default (state, action) => {
  switch (action.type) {
    case 'GET_NAVBAR_TITLE':
      return {
        ...state,
        navbar: [action.payload],
      }
    default:
      return state;
  }
}