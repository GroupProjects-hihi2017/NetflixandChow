let initialState = {movie: false, snack: false}

function isVisible (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_MOVIE':
      state.movie = true
      return state

    case 'RECEIVE_SNACK':
      state.snack = true
      return state

    default:
      return state
  }
}

export default isVisible
