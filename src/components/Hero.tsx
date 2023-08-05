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
      <div className="flex items-center space-x-6">
        <div className="h-[110px] w-[110px] rounded-full bg-slate-300 p-[10px] dark:bg-blue/20">
          <div className="h-[90px] w-[90px] rounded-full ring-[4px] ring-blue/90 dark:ring-blue/60">
            <img
              src="/assets/profile-picture.png"
              alt="Profile picture"
              className="h-full w-full rounded-full"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue">Clement</h1>
          <h2 className="text-lg text-slate-400">
            Front end developer at Le Collectionist
          </h2>
        </div>
      </div>
      <p className="mt-7 text-xl text-slate-600 dark:text-slate-200">
        Mostly TypeScript developer using React, React native & Vue. I do like
        building complex interfaces and constantly testing new technologies and
        techniques.
      </p>
      <HeroNavigation className={"mt-8"} ref={navigationRef} />
    </section>
  )
}
