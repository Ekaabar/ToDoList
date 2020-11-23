import React, { Component } from "react";
import InputField from "./inputField";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: '',
      count: 0,
      heading: "ToDo List: Enter a task below",
      today: Date(),
      items:[]
    };
    this.handleDone = this.handleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDone(id) {
    let li = document.getElementById(id);
    li.style.textDecorationLine = "line-through";
    li.style.textDecorationColor = "red";
  }
//*******************************
  handleDelete(index) {
    function deleted(item) {
      return item.id !== index;
    }
    let { count, items } = this.state;
    items = items.filter(deleted);
    this.setState({ items });
    this.setState({ count: count - 1 });
  }
  //******************************
  handleChange(event) {
    this.setState({ todo: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let { count, items, todo } = this.state;
    if (!todo.length) {
      return;
    }
    const new_item = { text: todo, id: count };
    items.push(new_item);

    this.setState({ count: count + 1 });
    this.setState({ items });
    this.setState({ todo: "" });
   console.log("Submit", count, items, todo); 
  }

  render () {
      return (
        <div>
          <h1>{this.state.heading}</h1>
              <span>Today is {this.state.today.toString()}</span>
              <br />
          <InputField todo ={this.state.todo} count={this.state.count}
                      onModify={this.handleChange}
                      onEnter={this.handleSubmit}
                      onDone={this.handleDone}
                      onDelete={this.handleDelete}
                      items={this.state.items}
          />
        </div>
      );

  }}
  export default App;
