import { useThemeSwitcher } from "../hooks/useThemeSwitcher"
// import IconAccessibility from "~icons/carbon/accessibility";
// import IconAccountBox from "~icons/mdi/account-box";

export const ToggleTheme = ({}: {}) => {
  const { theme, toggleTheme } = useThemeSwitcher()

  return (
    <button onClick={() => toggleTheme()}>
      {theme === "light" ? <span>dark</span> : <span>light</span>}
    </button>
  )
}
