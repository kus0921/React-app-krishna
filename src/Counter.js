import React, { Component } from 'react';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }
  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <button onClick={this.decrementCount}>Decrement</button>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>

      </div>
    );
  }
}
export default Counter;