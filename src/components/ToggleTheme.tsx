import { useThemeSwitcher } from "../hooks/useThemeSwitcher"
import IconLightMode from "~icons/ic/outline-light-mode"
import IconDarkMode from "~icons/mdi/weather-night"

export const ToggleTheme = ({
  iconsSize = "1.5em",
  ...rest
}: {
  iconsSize?: string
  [x: string]: any
}) => {
  const { theme, toggleTheme } = useThemeSwitcher()

  return (
    <button onClick={() => toggleTheme()}>
      {theme === "light" ? (
        <IconDarkMode style={{ fontSize: iconsSize, color: "rgb(51 65 85)" }} />
      ) : (
        <IconLightMode
          style={{ fontSize: iconsSize, color: "rgb(248 250 252)" }}
        />
      )}
    </button>
  )
}
