import React from 'react';
import { animated, useSpring } from 'react-spring'

export default function Squiggly({ vertical }) {
  const [spring, api] = useSpring(() => (vertical ? {y:'0'} : {x: '-23%'}))
  const config = { mass: 1, tension: 187, friction: 12.4 }

  function handleMouseEnter() {
    api.start( {
      from: vertical ? { y: '0' } : { x: '-23%' },
      to: vertical ? { y: '-23%' } : { x: '0' },
      config
    })
  }

  function handleMouseLeave() {
    api.start({
      to: vertical ? { y: '0' } : { x: '-23%' },
      from: vertical ? { y: '-23%' } : { x: '0' },
      config
    })
  }

  if (vertical) {
    return (
      <div
        className='overflow-hidden absolute h-[50%] top-[-13%] left-[-7%]'
      >
        <animated.div
          style={spring}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='h-[133%]'
        >
          <img src="shapes/v-Intersect.svg" className='my-[-1px] h-1/3'/>
          <img src="shapes/v-Intersect.svg" className='my-[-1px] h-1/3'/>
          <img src="shapes/v-Intersect.svg" className='my-[-1px] h-1/3'/>
        </animated.div>
      </div>
    );
  }
  return (
    <div
      className='overflow-hidden absolute w-[33%] right-[-8%] bottom-[-13%]'
    >
      <animated.div
        className='w-[133%]'
        style={spring}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src="shapes/Intersect.svg" className='mx-[-1px] w-1/3 inline-block'/>
        <img src="shapes/Intersect.svg" className='mx-[-1px] w-1/3 inline-block'/>
        <img src="shapes/Intersect.svg" className='mx-[-1px] w-1/3 inline-block'/>
      </animated.div>
    </div>
  );
}
