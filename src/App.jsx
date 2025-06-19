import React, { useState } from 'react';
import CounterButton from './child';

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Counter: {count}</p>

      {/* Pass the function to child */}
      <CounterButton onIncrease={increaseCounter} />
    </div>
  );
};

export default App;