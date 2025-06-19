import React, { useEffect, useRef, useState } from 'react';

const CircleFollower = ({ targetPosition }) => {
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 }); // Smooth animated position
  const animationRef = useRef(); // For storing requestAnimationFrame ID

  useEffect(() => {
    // Animate smoothly towards targetPosition
    const animate = () => {
      setCurrentPosition((prev) => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;

        const speed = 0.1; // Adjust for smoothness (0.1 = slow, 1 = instant)

        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });

      animationRef.current = requestAnimationFrame(animate); // Keep animating
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup: cancel animation when component unmounts or position changes
    return () => cancelAnimationFrame(animationRef.current);
  }, [targetPosition]);

  const style = {
    position: 'absolute',
    left: currentPosition.x,
    top: currentPosition.y,
    width: '30px',
    height: '30px',
    backgroundColor: 'blue',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
  };

  return <div style={style}></div>;
};

export default CircleFollower;
