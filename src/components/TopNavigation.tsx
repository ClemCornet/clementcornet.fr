import { useMemo } from "react"
import { useStore } from "@nanostores/react"

import { navigationStore } from "../stores/navigationStore"

import { HeroNavigation } from "./HeroNavigation"
import { ToggleTheme } from "./ToggleTheme"

export const TopNavigation = () => {
  const navigation = useStore(navigationStore)

  const opacity = useMemo(
    () =>
      navigation === "static" ? "hidden scale-0" : "opacity-100 scale-100",
    [navigation]
  )

  return (
    <div
      className={`container sticky top-10 mx-auto flex max-w-2xl items-center justify-around transition duration-300 md:justify-between ${opacity} z-50 rounded-2xl border border-slate-200 px-4 py-4 backdrop-blur will-change-transform dark:border-none [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]`}
    >
      <div className="h-[50px] w-[50px] rounded-full ring-[4px] ring-blue/90 dark:ring-blue/60">
        <img
          src="/assets/profile-picture.png"
          alt="Profile picture"
          className="h-full w-full rounded-full"
        />
      </div>
      <div className={`flex items-center justify-center text-slate-400`}>
        <HeroNavigation />
        <div className="ml-6 hidden md:block">
          <ToggleTheme iconsSize="1.2em" />
        </div>
      </div>
    </div>
  )
}
