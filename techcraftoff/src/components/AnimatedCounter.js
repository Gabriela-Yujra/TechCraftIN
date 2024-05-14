import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ fromValue, toValue, duration }) => {
  const [currentValue, setCurrentValue] = useState(fromValue);
  
  useEffect(() => {
    const start = Date.now();
    
    const updateCounter = () => {
      const now = Date.now();
      const elapsedTime = now - start;
      const progress = Math.min(1, elapsedTime / duration);
      const nextValue = Math.round((toValue - fromValue) * progress + fromValue);
      setCurrentValue(nextValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }, [fromValue, toValue, duration]);
  
  return <span> + {currentValue}</span>;
};

export default AnimatedCounter;
