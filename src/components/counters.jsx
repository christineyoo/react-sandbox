import React, { Component } from 'react';
import ShoppingCounter from './shoppingCounter';

// Counters
//     |
//  ShoppingCounter

class Counters extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className='btn btn-primary btn-sm m-2'
        >
          Reset
        </button>
        <br />
        {this.props.counters.map((counter) => (
          <ShoppingCounter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter} //you can pass in the entire counter object
          />
        ))}
      </div>
    );
  }
}

export default Counters;
