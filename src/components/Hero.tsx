import { useEffect, useRef, useState } from "react"
import { useScrollPosition } from "../hooks/useScrollPosition"

import { HeroNavigation } from "./HeroNavigation"

export const Hero = () => {
  const [opacity, setOpacity] = useState("opacity-100")
  const scrollPosition = useScrollPosition(400)
  const navigationRef = useRef<HTMLDivElement>(null)

  const hiddenNav = (scrollPosition: number) => {
    if (navigationRef.current) {
      if (scrollPosition + 100 <= navigationRef.current.offsetTop) {
        setOpacity("opacity-100")
      } else {
        setOpacity("opacity-0")
      }
    }
  }

  useEffect(() => {
    hiddenNav(scrollPosition)
  }, [scrollPosition])

  return (
    <div className={`transition duration-300 ${opacity}`}>
      <div className="flex items-center space-x-6">
        <div className="rounded-full bg-gradient-to-tl from-blue/60 to-slate-900/80 p-[3px] shadow-lg ring-[5px] ring-blue/20">
          <div className="h-[90px] w-[90px] rounded-full p-px">
            <img
              src="/assets/profile-picture.png"
              alt="Profile picture"
              className="rounded-full"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue">Clément</h1>
          <h2 className="text-lg text-slate-400">
            Front end developer at Le Collectionist
          </h2>
        </div>
      </div>
      <p className="mt-7 text-xl text-slate-200">
        Welcome to my digital garden where I share what I'm learning about
        shipping great products, becoming a better developer and growing a
        career in tech.
      </p>
      <HeroNavigation ref={navigationRef} />
    </div>
  )
}
