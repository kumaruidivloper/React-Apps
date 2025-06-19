import React from 'react';

const Child = ({ onSendData }) => {
  const userDetails = {
    name: 'Kumar',
    age: 35,
    location: 'Sydney'
  };

  const sendDataToParent = () => {
    // Call the function passed from the parent
    onSendData(userDetails);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default Child;