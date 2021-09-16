import React, { Component } from 'react';
import ShoppingCounter from './shoppingCounter';

// ShopptingCounters
//     |
//  ShoppingCounter

class ShoppingCounters extends React.Component {
  render() {
    console.log('Counters - Rendered')
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        <br />
        {counters.map((counter) => (
          <ShoppingCounter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter} //you can pass in the entire counter object
          />
        ))}
      </div>
    );
  }
}

export default ShoppingCounters;
