import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const { filter, handleSetFilter } = this.props
    return (
      <div>
        <span>show:</span>
        <button disabled={filter === "all"}
          onClick={() => {
            handleSetFilter("all")
          }}>All</button>
        <button disabled={filter === "active"} onClick={() => {
          handleSetFilter("active")
        }}>Active</button>
        <button disabled={filter === "complete"} onClick={() => {
          handleSetFilter("completed")
        }}>Complete</button>
      </div>
    )
  }
}
