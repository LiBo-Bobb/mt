import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      filter: "all",
    };
    this.nextTodoId = 0;
  }

  addTodo = (text) => {
    const todo = {
      id: this.nextTodoId++,
      text,
      completed: false,
    }
    const newTodos = [todo, ...this.state.todos]
    this.setState({ todos: newTodos })
  }

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    let tmpTodos = todos.filter(i => {
      if (filter === "active") {
        return !i.completed
      } else if (filter === "completed") {
        return i.completed
      } else {
        return true
      }
    })

    return tmpTodos
  }

  handleSetFilter = (filter) => {
    // console.log("filter...", filter)
    this.setState({ filter: filter })
  }

  toggleTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.map(item => {
      return item.id === id ? { ...item, completed: !item.completed }:item
    })

    this.setState({todos:newTodos})
  }
  render() {
    const { filter } = this.state
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.getVisibleTodos()} toggleTodo={this.toggleTodo}/>
        <Footer filter={filter} handleSetFilter={this.handleSetFilter} />
      </div>
    )
  }
}
