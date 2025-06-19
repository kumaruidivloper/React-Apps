import React from 'react';

const CounterButton = ({ onIncrease, onDecrease }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onIncrease}>Increase Counter</button>
      <button onClick={onDecrease}>Increase Counter</button>
    </div>
  );
};

export default CounterButton;