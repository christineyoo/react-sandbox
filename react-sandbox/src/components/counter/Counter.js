import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

    return ( <>
        <h1>Counter</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </> );
}
 
export default Counter;