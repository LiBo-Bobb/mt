import { connect } from 'redux';
import { toggleTodo } from '../actions/index'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos
    case "completed":
      return todos.filter(t => t.completed)
    case "active":
      return todos.filter(t => !t.completed)
    default:
      return new Error("Unknow filter" + filter)
  }
}
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.filter),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)