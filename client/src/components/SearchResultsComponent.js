import { useContext } from "react";
import { searchedResultsWrapper,searchedListStyle } from "../styles/searchStyles";
import { ThemeContext } from "../App";

export default function SearchResultsComponent({searchedSongs}){

    const [theme,setTheme] = useContext(ThemeContext);

    return (
        <div style = {{
            heigth: '50px',
            justifyContent: 'center',
        }}>
            <ul style = {searchedResultsWrapper(theme)}>
            {searchedSongs.map((song,index) => 
                <li style = {searchedListStyle(theme,index)}>
                    {song.song} 
                    <div style = {{textAlign: 'center'}}>
                    <p style = {{color: `${theme.font.regular}80`}}> {song.artist}  
                    <span> Current Position: {song.currentPosition}</span></p>
                    </div>
                </li>
            )}
            </ul>
        </div>
    )
}