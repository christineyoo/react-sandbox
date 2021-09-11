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

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //create a copy of the counters array in the state
    const index = counters.indexOf(counter); //find the index of the counter passed in
    counters[index] = {...counter}; //@ that index, reassign the value as a copy of the counter object that was passed in
    counters[index].value++; //increment the value property
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className='btn btn-primary btn-sm m-2'
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <ShoppingCounter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter} //you can pass in the entire counter object
          />
        ))}
      </div>
    );
  }
}

export default Counters;
