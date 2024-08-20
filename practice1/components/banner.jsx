import { useContext } from "react";
import { FilterTheme } from "../Hooks/useContentHook";

const Banner = () => {
    const {theme} = useContext(FilterTheme);
  return (
    <div>
      <p style={theme === "light" ? { color: "red" } : { color: "yellow" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a quasi
        odio culpa itaque pariatur quos consectetur laborum iusto repellendus
        accusantium autem enim ipsam eligendi aut, animi, dolores amet fuga?
      </p>
    </div>
  );
};

export default Banner;
