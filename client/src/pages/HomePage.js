import { useEffect, useState } from "react";
import { createContext } from "react";
import ChartComponent from "../components/ChartComponent";
import TopSongsComponent from "../components/TopSongsComponent";
import { getHot100 } from "../helpers/functions";
import { currentDate } from "../helpers/constants";

export const TopSongsContext = createContext();

export default function HomePage() {

    const [topValue,setTopValue] = useState(10);
    const [topSongs,setTopSongs] = useState([{}]);

    useEffect(()=> {
        getHot100(currentDate,topValue)
        .then(res => {setTopSongs(res)})
      },[topValue])
    return (
    <div>
        <TopSongsContext.Provider value = {topValue}>
        <TopSongsComponent topValue = {topValue} setTopValue = {setTopValue} topSongs = {topSongs} setTopSongs = {setTopSongs}/>
        <ChartComponent topSongs = {topSongs}/>
        </TopSongsContext.Provider>
    </div>
    )
}