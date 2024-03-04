import Link from 'next/link';

import bentos from '@/components/bento-grid/details'

const WIDTH = 1067
const HEIGHT = 712
const TOP = 60
const LEFT = 107

const MOBILE_WIDTH = 390
const MOBILE_HEIGHT = 830


export default function BentoGrid() {
  return (
    <>
      <section id="bento-section" className="hidden sm:flex items-center justify-center w-full h-screen bg-[#FFFCEA]">
        <div id="bento-grid" className="h-[90%] relative" style={{aspectRatio: WIDTH/HEIGHT}}>
          {bentos.map(bento => {
            const left = (100 * (bento.left - LEFT) / WIDTH).toFixed(2)
            const top = (100 * (bento.top - TOP) / HEIGHT).toFixed(2)
            const width = (100 * bento.width / WIDTH).toFixed(2)
            return (
              <div className='group absolute' key={bento.name} style={{
                left: left + '%',
                top: top + '%',
                width: width + '%',
                aspectRatio: bento.width / bento.height,
              }}> 
                {bento.name !== 'pattern' ? 
                <Link href={'/' + bento.link}
                className="w-full h-full absolute duration-500 transition-all rounded-[1.25rem] z-10
                  ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] origin-top-left
                  group-hover:w-[calc(100%_-_.5rem)] group-hover:h-[calc(100%_-_.5rem)]
                  shadow-black group-hover:shadow-[.5rem_.5rem_0_0_black]"
                  style={{background: bento.color}}>
                  <bento.component />
                </Link> :
                <bento.component />}
            </div>
          )})}
        </div>
      </section >
      <section 
        className="sm:hidden relative w-full bg-[#FFFCEA]" 
        style={{ aspectRatio: MOBILE_WIDTH / MOBILE_HEIGHT }}>
          {bentos.map(bento => {
            const left = (100 * bento.mobile.left / MOBILE_WIDTH).toFixed(2)
            const top = (100 * bento.mobile.top / MOBILE_HEIGHT).toFixed(2)
            const width = (100 * bento.mobile.width / MOBILE_WIDTH).toFixed(2)
            return (
              <div className='group absolute' key={bento.name} style={{
                left: left + '%',
                top: top + '%',
                width: width + '%',
                aspectRatio: bento.mobile.width / bento.mobile.height,
              }}>
                {bento.name !== 'pattern' &&
                  <Link href={'/' + bento.link}
                    className="w-full h-full absolute duration-500 transition-all rounded-[.75rem] z-10
                  ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] origin-top-left
                  group-hover:w-[calc(100%_-_.5rem)] group-hover:h-[calc(100%_-_.5rem)]
                  shadow-black group-hover:shadow-[.5rem_.5rem_0_0_black]"
                    style={{ background: bento.color }}>
                    <bento.component />
                  </Link>}
              </div>
            )
          })}
      </section >
    </>
  );
}
