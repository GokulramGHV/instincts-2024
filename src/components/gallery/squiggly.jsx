import React from 'react';
import { animated, useSpring } from 'react-spring'

export default function Squiggly({ vertical }) {
  const [spring, api] = useSpring(() => (vertical ? {y:'0rem'} : {x: '-4.3rem'}))
  const config = { mass: 1, tension: 187, friction: 12.4 }

  function handleMouseEnter() {
    api.start( {
      from: vertical ? { y: '0rem' } : { x: '-4.3rem' },
      to: vertical ? { y: '-5.5rem' } : { x: '0rem' },
      config
    })
  }

  function handleMouseLeave() {
    api.start({
      to: vertical ? { y: '0rem' } : { x: '-4.3rem' },
      from: vertical ? { y: '-5.5rem' } : { x: '0rem' },
      config
    })
  }

  if (vertical) {
    return (
      <div
        className='overflow-hidden absolute h-[12rem] left-[-3rem] top-[-3rem]'
      >
        <animated.div
          style={spring}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src="shapes/v-Intersect.svg" className='my-[-1px] h-[5.5rem]'/>
          <img src="shapes/v-Intersect.svg" className='my-[-1px] h-[5.5rem]'/>
          <img src="shapes/v-Intersect.svg" className='my-[-1px] h-[5.5rem]'/>
        </animated.div>
      </div>
    );
  }
  return (
    <div
      className='overflow-hidden w-[12rem] absolute bottom-[-3rem] right-[-3rem]'
    >
      <animated.div
        className='flex'
        style={spring}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src="shapes/Intersect.svg" className='mx-[-1px] w-[5.5rem]'/>
        <img src="shapes/Intersect.svg" className='mx-[-1px] w-[5.5rem]'/>
        <img src="shapes/Intersect.svg" className='mx-[-1px] w-[5.5rem]'/>
      </animated.div>
    </div>
  );
}
