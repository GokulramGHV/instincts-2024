import { animated, useSpring } from 'react-spring';
import React from 'react';

export default function Wheel() {
  const [spring, api] = useSpring(() => ({ rotate: '0deg' }))
  const config = { mass: 1, tension: 187, friction: 12.4 }

  function handleMouseEnter() {
    api.start({ 
      from: { rotate: '0deg' }, 
      to: { rotate: '90deg' }, 
      config
    })
  }
  
  function handleMouseLeave() {
    api.start({
      from: { rotate: '90deg' },
      to: { rotate: '0deg' },
      config
    })
  }

  return (
    <animated.div
      style={{
        backgroundImage: 'url("shapes/wheel.svg")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        ...spring
      }}
      className='w-full aspect-square'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
