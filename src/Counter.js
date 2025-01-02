import React, { Component,useState } from 'react';
//import React, { useState } from 'react';

class Counter extends Component {
  constructor(initialValue) {
    super(initialValue);
    //setCount=useState(initialValue);
    this.state = { count: initialValue };
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