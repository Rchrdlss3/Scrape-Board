import { useContext, useState } from "react";
import { themeSwitchWrapper, labelStyle,inputStyle,switchButtonStyle,switchToggleStyle } from "../styles/themeStyles";
import { ThemeContext } from "../App";
import { switchTheme } from "../helpers/themeFunctions";

export default function ThemeSwitchComponent(){
    const [theme,setTheme] = useContext(ThemeContext)
    console.log(theme)
    const [isChecked,setIsChecked] = useState()
    return (
        <div>
            <div style = {themeSwitchWrapper()}>
            <label style = {labelStyle()}>
            <input 
            type = "checkbox" 
            checked = {isChecked}
            style = {inputStyle()}
            onChange={(e) => {
                    setIsChecked(e.target.checked)
                    setTheme(switchTheme())
                }}
            />
            <span style = {switchButtonStyle(theme,isChecked)}/>
            <span style = {switchToggleStyle()}/>
            </label>
        </div>
        </div>
    )
}