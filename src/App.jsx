import React, { useState, useEffect } from 'react';
import CircleFollower from './CircleFollower';

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <h1>Move your mouse!</h1>
      {/* Pass mouse position to the child */}
      <CircleFollower position={position} />
    </div>
  );
};

export default App;