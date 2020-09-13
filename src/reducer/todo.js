import { ADD_TODO, TOGGLE_TODO, } from '../actions/actionTypes'


const todos = (state = [], action) => {
  // console.log("action...",action)
  switch (action.type) {
    case ADD_TODO:
      // console.log("111",state,)
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.id
          ? {
            ...todo,
            completed: !todo.completed
          }
          : todo
      })

    default:
      return state
  }
}

export default todos;