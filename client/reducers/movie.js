function movie (state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_MOVIE':
    console.log(action);
      return action.movie
    default:
      return state
  }
}

export default movie
