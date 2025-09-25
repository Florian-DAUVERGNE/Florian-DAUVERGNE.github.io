"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const Loader = () => {
  const loadingRef = useRef(null)

  const [isAnimationFinished, setIsAnimationFinished] = useState<boolean>(false)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimationFinished(true)
      },
    })
    // Removed counter and delay
    tl.to(".line", 1.5, {
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    })
  }, [])



  return (
    <div ref={loadingRef} aria-hidden="true">
      {!isAnimationFinished && (
        <div className="fixed w-screen h-screen z-[9999] flex">
          {[...new Array(11)].map((_, index) => (
            <div key={index} className="line w-full h-full bg-black" />
          ))}
        </div>
      )}
    </div>
  )
}

export default Loader
