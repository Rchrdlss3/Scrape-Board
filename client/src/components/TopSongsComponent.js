import { searchedResult, topSongsWrapper, searchedPosition, searchedSong, searchedArtist, topSongsComponentWrapper } from "../styles/searchStyles";
import { arrowStyle, leftArrow, rightArrow } from "../styles/commonStyles";
import { useContext } from "react";
import { ThemeContext } from "../App";


export default function TopSongsComponent({topValue,setTopValue,topSongs,setTopSongs}){
    const [theme,setTheme] = useContext(ThemeContext)
    console.log(theme)
    return (
        <div>
            <h1>Top {topValue} Songs</h1>
            <div style = {topSongsComponentWrapper()}>
                <div>
                <button style = {arrowStyle(theme,135)} onClick = {() => {setTopValue(topValue > 10 ? topValue-10 : 10)}}></button>
                </div>
            <div style = {topSongsWrapper()}>
            {topSongs.map(song => {
                return <div style = {searchedResult()}>
                    <span style = {searchedPosition()}>{song.currentPosition}</span>
                    <span style = {searchedSong()}>{song.song}</span>
                    <span style = {searchedArtist()}>{song.artist}</span>
                    </div>
            })}
        </div> 
        <div>
        <button style = {arrowStyle(theme,-45)} onClick = {() => {setTopValue(topValue < 100 ? topValue+10 : 100)}}></button>  
        </div>
        </div>
        </div>


    )
}