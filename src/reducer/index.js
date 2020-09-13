
import { combineReducers } from 'redux'
import todos from './todo'
import filter from './filter'
import text from './text'

// console.log("todos.......",todos)
export default combineReducers({
  todos,
  filter,
  text
})