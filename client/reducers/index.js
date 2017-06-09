import {combineReducers} from 'redux'

import movie from './movie'
import snack from './snack'
import isVisible from './isVisible'

export default combineReducers({
  movie,
  snack,
  isVisible
})
