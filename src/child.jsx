import React from 'react';

const CounterButton = ({ onIncrease }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onIncrease}>Increase Counter</button>
    </div>
  );
};

export default CounterButton;