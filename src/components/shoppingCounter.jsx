import React, { Component } from 'react';

class ShoppingCounter extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount')
  }

  render() {
    console.log('Counter - Rendered');
    const { onIncrement, onDecrement, onDelete, counter} = this.props;
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className='btn btn-secondary btn-sm m-2'
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className='btn btn-secondary btn-sm m-2'
          disabled={counter.value === 0}
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          x
        </button>
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default ShoppingCounter;
