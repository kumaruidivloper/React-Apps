import React, { useEffect, useRef, useState } from 'react';

const CircleFollower = ({ targetPosition }) => {
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef();

  useEffect(() => {
    const animate = () => {
      setCurrentPosition((prev) => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        const speed = 0.1; // lower = smoother/slower

        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

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
