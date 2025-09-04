import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ 
  children, 
  animation = 'fade-in-up', 
  threshold = 0.1, 
  delay = 0, 
  className = '',
  triggerOnce = true 
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`${animation} ${hasAnimated ? 'visible' : ''} ${className}`}
      style={{
        transitionDelay: hasAnimated ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;