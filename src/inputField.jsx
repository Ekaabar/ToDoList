//import React from 'react';
import React, { Component } from "react";
import Items from "./items";

//const InputBox =() => {
class InputField extends Component {
 
  render() {
    return (
      <div>
        <div>
          You have <span>{this.props.count}</span> Task(s) for today:{" "}
        </div>{" "}
        <br />
        <br />
        <form onSubmit={this.props.onEnter}>
          <label>Enter a task here :</label> &nbsp;
          <input
            id="todo"
            type="text"
            value={this.props.todo}
            onChange={this.props.onModify}
          />
          &nbsp;
          <input id="submit" type="submit" value="Add Task" />
        </form> 
        <Items 
               items ={this.props.items}
               onDone={this.props.onDone}
               onDelete={this.props.onDelete}
        />
      </div>      
    );
  }  
}
export default InputField;