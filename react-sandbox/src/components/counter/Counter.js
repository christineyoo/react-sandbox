import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);
  const [word, setWord] = useState('hello');
  const [planet, setPlanet] = useState({});

  const changeWord = () => {
      if (word === 'hello') setWord('goodbye');
      else setWord('hello');
  }

  //second parameter is an array that holds a value. If that value is changed, then the useEffect hook is run.
  //if you pass in [], useEffect runs only ONCE (onMount) because [] never changes.
  //summary: when any values in the second parameter are changed, the useEffect gets called
  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${count}`)
        .then(response => response.json())
        .then(json => setPlanet(json))
        .catch(err => console.log('an error occurred'))
  }, [count]);

//   useEffect(() => {
//     fetch(`https://swapi.dev/api/people/${count}`)
//         .then(response => response.json())
//         .then(json => setPlanet(json))
//         .catch(err => console.log('an error occurred'))
//   }, [count])

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
        <p>{word}</p>
        <button onClick={() => changeWord()}>Click me</button>
        <h1>
            Star Wars Planet: {count}
        </h1>
        <h2>{planet.name}</h2>
        <h3>Climate: {planet.climate}</h3>
        <h3>Terrain: {planet.terrain}</h3>
      </> );
}
 
export default Counter;