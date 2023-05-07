import { useScrollPosition } from "../hooks/useScrollPosition";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";
// import IconAccessibility from "~icons/carbon/accessibility";
// import IconAccountBox from "~icons/mdi/account-box";

export const ToggleTheme = ({}: {}) => {
  const { theme, toggleTheme } = useThemeSwitcher();
  const scrollPosition = useScrollPosition(400);

  console.log(scrollPosition);

  return (
    <div>
      <button onClick={() => toggleTheme()}>
        {theme === "light" ? <span>dark</span> : <span>light</span>}
      </button>
      {/* <IconAccessibility />
      <IconAccountBox style={{ fontSize: "2em", color: "red" }} /> */}
    </div>
  );
};
