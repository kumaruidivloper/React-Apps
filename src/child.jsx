import React from 'react';

// Receiving props from parent
const Child = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Hello, {props.name}!</p>
    </div>
  );
};

export default Child;