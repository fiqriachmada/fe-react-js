import React, { Component } from "react";
import CounterButton from "./CounterButton";

export class CounterComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");
  }

  state = {
    count: 1,
  };

  handleChange = (newValue) => {
    if (this.state.count + newValue >= 0) {
      this.setState({ count: this.state.count + newValue });
    }
  };

  render() {
    console.log("Updated");
    return (
      <div>
        <h3>{this.state.count}</h3>
        <CounterButton onHandleChange={(value) => this.handleChange(value)} />
      </div>
    );
  }
}

export default CounterComponent;
