import { useContext } from "react";
import { FilterTheme } from "../Hooks/useContentHook";

const Header = () => {
  const { theme, setTheme } = useContext(FilterTheme);
    const ToggleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
   return (
    <div>
      <ul>
        <li>
          <a href="#" onClick={ToggleTheme}>{theme}</a>
        </li>
        <li>
          <a
            href="#"
            style={theme === "light" ? { color: "red" } : { color: "yellow" }}
          >
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Call</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
