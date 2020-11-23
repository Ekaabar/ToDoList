import React, { Component } from "react";
import Item from "./item";

class Items extends Component {
render() {
    const { items } = this.props;
    return (
        <ul>
          {items.map(item => (
            <li style={{ marginLeft: "100px" }} key={item.id} id={item.id}>
              <Item
              onDone={this.props.onDone}
              onDelete={this.props.onDelete}
              id={item.id}
              text={item.text}
            />
            </li>
          ))}
        </ul>
    );
}
}
export default Items;