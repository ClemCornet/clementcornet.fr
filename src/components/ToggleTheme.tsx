import { useThemeSwitcher } from "../hooks/useThemeSwitcher";

export const ToggleTheme = ({}: {}) => {
  const { theme, toggleTheme } = useThemeSwitcher();

  return (
    <div>
      <button onClick={() => toggleTheme()}>
        {theme === "light" ? <span>dark</span> : <span>light</span>}
      </button>
    </div>
  );
};
