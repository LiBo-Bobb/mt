import { SET_TODO_TETX, } from '../actions/actionTypes'


const text = (state = "", action) => {
  switch (action.type) {
    case SET_TODO_TETX:
      return action.text
    default:
      return state
  }
}

export default text