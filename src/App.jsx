import React, { useState, useEffect } from 'react';
import CircleFollower from './CircleFollower';

const App = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 }); // Track mouse position

  // useEffect to track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    // Add event listener when component mounts
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <h2>Move your mouse — the circle follows smoothly!</h2>
      <CircleFollower targetPosition={cursor} />
    </div>
  );
};

export default App;