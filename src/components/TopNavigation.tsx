import { useMemo } from "react"
import { useStore } from "@nanostores/react"

import { navigationStore } from "../stores/navigationStore"

import { ToggleTheme } from "./ToggleTheme"

export const TopNavigation = () => {
  const navigation = useStore(navigationStore)

  const opacity = useMemo(
    () =>
      navigation === "static" ? "opacity-0 scale-0" : "opacity-100 scale-100",
    [navigation]
  )

  return (
    <div
      className={`container sticky top-10 mx-auto max-w-2xl transition duration-300 ${opacity} rounded-2xl px-4 py-2.5 backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]`}
    >
      <nav className={`flex justify-center text-slate-400`}>
        <ul className="flex space-x-6">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
        </ul>
        <div className="ml-8">
          <ToggleTheme />
        </div>
      </nav>
    </div>
  )
}
