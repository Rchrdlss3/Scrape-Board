import { useState,useContext } from "react"
import { debounce, searchHot100, updateDebounceText } from "../helpers/functions";
import { currentDate } from "../helpers/constants";
import SearchResultsComponent from "./SearchResultsComponent";
import { ThemeContext } from "../App";
import { calendarStyle, inputStyle } from "../styles/searchStyles";

export default function SearchComponent() {
    const [searchedSongs,setSearchedSongs] = useState([]);
    const [searchedDate,setSearchedDate] = useState(currentDate)
    const [theme,setTheme] = useContext(ThemeContext)
    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}>
            <input 
            placeholder="Search A Song on the Hot100"
            style = {inputStyle(theme)} 
            onChange = {(e) => {
                const text = e.target.value
                const updateResults = debounce(() => 
                {
                    searchHot100(currentDate,text)
                    .then(res => setSearchedSongs(res))
                },1000)
                updateResults()
                }}></input>
            <input style = {calendarStyle(theme)} 
            type = "date"
            value = {searchedDate}
            onChange = {(e) => setSearchedDate(e.target.value)}
            ></input>
            <SearchResultsComponent searchedSongs = {searchedSongs}/>
        </div>
    )
}