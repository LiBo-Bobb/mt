import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const {text,completed,onClick} = this.props
    return (
      <li style={{textDecoration:completed?'line-through':'none'}} onClick={onClick}>
        {text}
      </li>
    )
  }
}
