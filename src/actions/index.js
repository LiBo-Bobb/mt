import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TETX } from './actionTypes'

let nextTodoId = 0;


/**
 * 新增待办事项
 * @param {*string} text 
 */
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text,
  }
}


/**
 * 更改待办事项状态
 * @param {*number} id 
 */
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  }
}



/**
 * 设置过滤状态
 * @param {*} filter 
 */
export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter,
  }
}




/**
 * 设置新增待办事项的文本
 * @param {*} text 
 */
export const setTodoText = (text) => {
  return {
    type: SET_TODO_TETX,
    text,
  }
}
