import { useContext } from "react";
import { ThemeContext } from "../App";
import { navigationLinks } from "../helpers/constants";
import { NavLink } from "react-router-dom";
import ThemeSwitchComponent from "./ThemeSwitchComponent";
import { navLinkStyle } from "../styles/themeStyles";

export default function NavigationComponent () {
    const [theme,setTheme] = useContext(ThemeContext);
    return (
        <div>
            {navigationLinks.map(link => {
                return <NavLink 
                to = {link.path}
                key = {link.name}
                style = {({isActive,isPending,isTransitioning}) => {
                    return navLinkStyle(theme,isActive)
                }}
                >
                    {link.name}
                </NavLink>
            })}
            <ThemeSwitchComponent />
        </div>
    )
}