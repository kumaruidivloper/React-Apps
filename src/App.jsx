import React from 'react';
import Child from './Child';

const App = () => {
  const userName = 'Kumar';

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Passing "userName" to Child as a prop */}
      <Child name={userName} />
    </div>
  );
};

export default App;
