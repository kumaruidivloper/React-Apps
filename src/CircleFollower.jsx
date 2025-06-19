import React from 'react';

const CircleFollower = ({ position }) => {
  const style = {
    position: 'absolute',
    left: position.x,
    top: position.y,
    width: '30px',
    height: '30px',
    backgroundColor: 'red',
    borderRadius: '50%',
    pointerEvents: 'none', // Let mouse events pass through
    transform: 'translate(-50%, -50%)', // center the circle on the cursor
  };

  return <div style={style}></div>;
};

export default CircleFollower;
