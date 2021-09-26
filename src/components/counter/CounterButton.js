import React, { Component } from "react";

export class CounterButton extends Component {
  handleChangeCounter = (newValue) => this.props.onHandleChange(newValue);
  render() {
    return (
      <div>
        <button
          onClick={() => this.handleChangeCounter(1)}
          className="btn btn-outline-info"
        >
          +
        </button>
        <button
          onClick={() => this.handleChangeCounter(-1)}
          className="btn btn-outline-danger"
        >
          -
        </button>
      </div>
    );
  }
}

export default CounterButton;
