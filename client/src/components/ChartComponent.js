import {Line,Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
} from "chart.js";
import { Colors } from '../models/themes';
import { ThemeContext } from '../App';
import { useContext } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)
export default function ChartComponent({topSongs}){
console.log(
    topSongs.map((song) => song)
)
const [theme,setTheme] = useContext(ThemeContext);
// Top ${topSongs.length} Songs
return (
    <div>
        <Bar 
        options = {{
            responsive: true,
            layout: {
                padding: 50
            },
            plugins : {
                legend : {
                    maxWidth: 1,
                    maxHeight: 50,
                }
            },
            scales: {
                x : {
                    grid: {
                        color: theme.font.regular
                    }
                },
                y: {
                    grid: {
                        color: `${theme.font.regular}50`
                    }
                }
            }
        }}
        data = {{
            labels: topSongs.map((song) => song.song),
            datasets: [{
                label: `Current Position`,
                data: topSongs.map((song) => song.currentPosition),
                backgroundColor: topSongs.map((song) => `${Colors.butterflyPurple.hex}50`),
                borderColor: Array(topSongs.length).fill(Colors.butterflyPurple.hex),
                borderWidth: 2
            },
            {
                label: 'Last Week Position',
                data: topSongs.map((song) => song.lastWeek),
                backgroundColor: topSongs.map((song) => `${Colors.ceruleanBlue.hex}50`),
                borderColor: Array(topSongs.length).fill(Colors.ceruleanBlue.hex),
                borderWidth: 2
            },
            {
                label: 'Peak Position',
                data: topSongs.map((song) => song.peakPosition),
                backgroundColor: topSongs.map((song) => `${Colors.crystalBlue.hex}50`),
                borderColor: Array(topSongs.length).fill(Colors.crystalBlue.hex),
                borderWidth: 2
            }
        ]
        }}
        width = '50px'
        height= '12px'
        />
    </div>
)
}