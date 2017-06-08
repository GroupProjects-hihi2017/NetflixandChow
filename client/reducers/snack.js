function snack (state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_SNACK':
      return action.snack
    default:
      return state
  }
}

export default snack
