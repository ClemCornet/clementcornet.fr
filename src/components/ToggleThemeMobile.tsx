import { useMemo } from "react"
import { useStore } from "@nanostores/react"

import { navigationStore } from "../stores/navigationStore"

import { ToggleTheme } from "./ToggleTheme"

export const ToggleThemeMobile = () => {
  const navigation = useStore(navigationStore)

  const opacity = useMemo(
    () =>
      navigation === "static" ? "hidden scale-0" : "opacity-100 scale-100",
    [navigation]
  )

  return (
    <div
      className={`${opacity} m-w-fit sticky bottom-6 z-50 flex flex-row-reverse`}
    >
      <div className="mr-2 rounded-full border border-slate-200 p-3 backdrop-blur transition duration-300 will-change-transform dark:border-none md:justify-between [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]">
        <ToggleTheme iconsSize="1.2em" />
      </div>
    </div>
  )
}
