import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
      }
      increment = () => {
        this.setState({ count: this.state.count + 1 });
      }
      decrement = () => {
        this.setState({ count: this.state.count - 1 });
      }
    render() {
      return React.createElement(
        'div',
        null,
        React.createElement('p', null, `Value: ${this.state.count}`),
      // Decrement button
      React.createElement('button', { onClick: this.decrement }, 'Decrement'),
      // Increment button
      React.createElement('button', { onClick: this.increment }, 'Increment')
    );
    }
  }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(React.createElement(Count, {count: 5}, null));
  export default Count;
//   render() {
//     return (
//       <div>
//         <button onClick={this.decrementCount}>Decrement</button>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>

//       </div>
//     );
//   }