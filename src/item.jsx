import React, { Component } from "react";
class Item extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            id: 0,
            text: ""
        };
    }*/
    render() {
        return (
            <React.Fragment>
                <button
                    style={{ fontSize: "10px" }}
                    onClick={() => this.props.onDone(this.props.id)}
                    className="btn btn-success btn-sm m-2"
                >
                    {" "}
                    Done
                    {/*<img
                    src="https://images.emojiterra.com/twitter/v11/512px/2705.png"
                    height="12px"
                    width="12px"
                    alt="check"
                    />*/}
                </button>
                <button
                    style={{ fontSize: "10px" }}
                    onClick={() => this.props.onDelete(this.props.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
                {this.props.text}
            </React.Fragment>
        );
    }
}
export default Item;