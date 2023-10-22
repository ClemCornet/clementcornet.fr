import { useEffect, useMemo, useRef } from "react"
import { useStore } from "@nanostores/react"

import { navigationStore, setNavigation } from "../stores/navigationStore"
import { useScrollPosition } from "../hooks/useScrollPosition"

import { HeroNavigation } from "./HeroNavigation"

export const Hero = () => {
  const navigationRef = useRef<HTMLDivElement>(null)
  const scrollPosition = useScrollPosition()
  const navigation = useStore(navigationStore)

  const hiddenNav = (scrollPosition: number) => {
    if (navigationRef.current) {
      if (scrollPosition + 120 <= navigationRef.current.offsetTop) {
        setNavigation("static")
      } else {
        setNavigation("sticky")
      }
    }
  }

  const opacity = useMemo(
    () => (navigation === "static" ? "opacity-100" : "opacity-0"),
    [navigation]
  )

  useEffect(() => {
    hiddenNav(scrollPosition)
  }, [scrollPosition])

  return (
    <section className={`transition duration-300 ${opacity} mb-16`}>
      <div className="flex space-x-6 md:items-center">
        <div className="h-[50px] w-[50px] rounded-full bg-slate-300 p-[10px] dark:bg-blue/20 md:h-[110px] md:w-[110px]">
          <div className="h-[50px] w-[50px] rounded-full ring-[4px] ring-blue/90 dark:ring-blue/60 md:h-[90px] md:w-[90px]">
            <img
              src="/assets/profile-picture.png"
              alt="Profile picture"
              className="h-full w-full rounded-full"
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-blue md:text-3xl">Clement</h1>
          <h2 className="flex flex-col text-slate-400 md:w-full md:flex-row md:text-lg">
            <span className="md:pr-1">Front end developer at</span>
            <span>Le Collectionist</span>
          </h2>
        </div>
      </div>
      <p className="mt-7 text-slate-600 dark:text-slate-200 md:text-lg">
        I am a TypeScript developer who works with React, React
        Native, and Vue.
        <br />I enjoy creating complex user interfaces and
        continuously experimenting with new technologies and techniques.
      </p>
      <HeroNavigation className={"mt-8"} ref={navigationRef} />
    </section>
  )
}
