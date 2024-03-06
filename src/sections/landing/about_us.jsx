import AboutInstincts from "@/components/about_us/about-instincts";
import AboutSSNSNU from "@/components/about_us/about-ssn-snu";
import { useEffect, useRef, useState } from "react";

function debounce(cb, time) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => cb(...args), time)
  }
}

export default function AboutUs() {
  const [slide, setSlide] = useState(0)

  const section = useRef(null)
  const sticker = useRef(null)

  const handleScroll = () => {
    setSlide(Math.round(2 * sticker.current.offsetTop / (section.current.clientHeight - sticker.current.clientHeight)))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="about-us" className="w-full h-[250vh] sm:h-[200vh] relative" ref={section}>
      <div className="w-full h-[100vh] sticky top-0" ref={sticker}>
        <div className="w-full h-full relative">
          <AboutSSNSNU slide={slide} />
          <AboutInstincts slide={slide} />
        </div>
      </div>
    </section>
  )
}
