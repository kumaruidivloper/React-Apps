import React from 'react';
import Child from './child';
import { render } from '@testing-library/react';

const App = () => {
  // Function to receive data from child
  const handleChildData = (dataFromChild) => {
    console.log('Received from child:', dataFromChild);
    render(
      <>
        <ul>
          <li>{dataFromChild.name}</li>
          <li>{dataFromChild.age}</li>
          <li>{dataFromChild.location}</li>
        </ul>
      </>
    )
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Passing callback function to child */}
      <Child onSendData={handleChildData} />
    </div>
  );
};

export default App;