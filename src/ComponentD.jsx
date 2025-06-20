import React from 'react';
import { useCounter } from './CounterContext';

const ComponentD = () => {
  const { count, dispatch } = useCounter();

  return (
    <div style={boxStyle}>
      <h3>Component D</h3>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
};

const boxStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px'
};

export default ComponentD;
