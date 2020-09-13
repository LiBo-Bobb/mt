import { createStore } from 'redux'

import rootReducer from './reducer'

import { addTodo, toggleTodo, setFilter, setTodoText } from './actions'
const store = createStore(rootReducer)
console.log("getState....", store.getState())


// 订阅state 变化
const unsubcribe = store.subscribe(() => {
  console.log("订阅getState....", store.getState())
})

store.dispatch(addTodo("learning react"))
store.dispatch(toggleTodo(0))
store.dispatch(setFilter("active"))
store.dispatch(setTodoText("larsssss"))

// quxiao
unsubcribe()
