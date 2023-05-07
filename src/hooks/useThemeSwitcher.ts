import { useEffect } from "react"
import { useStore } from "@nanostores/react"
import { themeStore, setTheme } from "../stores/themeStore"

export function useThemeSwitcher() {
  const theme = useStore(themeStore)
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        window.document.documentElement.classList.add("dark")
      } else {
        window.document.documentElement.classList.remove("dark")
      }
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  return {
    theme,
    toggleTheme,
  }
}
