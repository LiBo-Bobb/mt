import React, { Component } from 'react'

export default class AddTodo extends Component {
  constructor(props){
    super(props)
    this.state={
      text:"213123"
    }
  }

  addTodo =()=>{
    const {text} = this.state;
    const {addTodo} = this.props
    addTodo(text)
  }

  onChange=(e)=>{
    this.setState({text:e.target.value})
  }
  render() {
    const {text} = this.state;
    
    return (
      <div>
        <input value={text} onChange={this.onChange}/>
        <button onClick={this.addTodo}>
          add
        </button>
      </div>
    )
  }
}
