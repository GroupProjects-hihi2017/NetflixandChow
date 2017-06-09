function snack (state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_SNACK':
      return action.snack

    case 'ADD_SNACK':
    console.log(action.snack);
        return action.snack

    default:
    console.log('default');
      return state
  }
}

export default snack
