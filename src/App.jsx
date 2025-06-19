import React, { useState } from 'react';
import CounterButton from './child';

const App = () => {
  const [count, setCount] = useState(10);

  const increaseCounter = () => {
    setCount(prev => prev + 1);
  };

  const decreaseCounter = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Counter: {count}</p>

      {/* Pass the function to child */}
      <CounterButton onDecrease={decreaseCounter} onIncrease={increaseCounter} />
    </div>
  );
};

export default App;