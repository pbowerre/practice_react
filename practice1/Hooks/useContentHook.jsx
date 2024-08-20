import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const FilterTheme = createContext()  

const FilterCompTheme = ({children}) => {
    const [theme, setTheme] = useState("light");

    return(
        <FilterTheme.Provider value={{theme, setTheme}}>
            {children}
        </FilterTheme.Provider>
    )

}
FilterCompTheme.propTypes = {
    children: PropTypes.node.isRequired
};

export default FilterCompTheme;