import React, { Component } from 'react';
import ShoppingCounter from './shoppingCounter';

// Counters
//     |
//  ShoppingCounter

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <ShoppingCounter key={counter.id} value={counter.value} selected>
              <h4>Counter #{counter.id}</h4>
          </ShoppingCounter>
        ))}
      </div>
    );
  }
}

export default Counters;
