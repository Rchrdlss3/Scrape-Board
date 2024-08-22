<img src="https://github.com/user-attachments/assets/0429fdbd-98c6-4c6a-92c9-05baa765f4e6" width = "850"/>

[![My Skills](https://skillicons.dev/icons?i=mongo,express,react,nodejs,js,html,css)](https://skillicons.dev)
## Overview
MERN (MongoDB, Express, React, Node) Web Application that uses Puppeteer library to scrape through [Billboard](https://www.billboard.com/)'s Hot100 Chart once a day, and stores entries into Mongo Database. Express framework provides API endpoints to retrieve songs from specified date, top (n) songs, and search to see if a specified song is on the charts. React library utilized to provide pleasent UI/UX experience to end user.
## <span style = " color: #FF2C2C" >Disclaimer</span>
The information on this project is for educational and informational purposes only and is not intended for any professional services.

## REST API
### Queries
| Query | Type | Example |
| ------|------|---------|
|Date|String (YYYY/MM/DD)| 2024-08/21|
|songName|String|Espresso|
|top|Number (1-100)|43

### Requests

#### Get Hot100 Songs

```
http://localhost:80/hot100Chart/get?date=2024-08-21
```
<details>
<summary>Response Example</summary>

```

{
	"_id": "66c64a8f92f23deb794347a1",
	"date": "2024-08-21",
	"songs": [
		{
			"artist": "Shaboozey",
			"song": "A Bar Song (Tipsy)",
			"currentPosition": "1",
			"lastWeek": "1",
			"peakPosition": "1",
			"weeksOnChart": "18"
		},
		{
			"artist": "Post Malone Featuring Morgan Wallen",
			"song": "I Had Some Help",
			"currentPosition": "2",
			"lastWeek": "2",
			"peakPosition": "1",
			"weeksOnChart": "14"
		},
		{
			"artist": "Kendrick Lamar",
			"song": "Not Like Us",
			"currentPosition": "3",
			"lastWeek": "3",
			"peakPosition": "1",
			"weeksOnChart": "15"
		},
		{
			"artist": "Sabrina Carpenter",
			"song": "Espresso",
			"currentPosition": "4",
			"lastWeek": "4",
			"peakPosition": "3",
			"weeksOnChart": "18"
		},
		{
			"artist": "Billie Eilish",
			"song": "Birds Of A Feather",
			"currentPosition": "5",
			"lastWeek": "7",
			"peakPosition": "5",
			"weeksOnChart": "13"
		},
		{
			"artist": "Tommy Richman",
			"song": "Million Dollar Baby",
			"currentPosition": "6",
			"lastWeek": "5",
			"peakPosition": "2",
			"weeksOnChart": "16"
		},
		{
			"artist": "Chappell Roan",
			"song": "Good Luck, Babe!",
			"currentPosition": "7",
			"lastWeek": "6",
			"peakPosition": "6",
			"weeksOnChart": "19"
		},
		{
			"artist": "Sabrina Carpenter",
			"song": "Please Please Please",
			"currentPosition": "8",
			"lastWeek": "8",
			"peakPosition": "1",
			"weeksOnChart": "10"
		},
		{
			"artist": "Teddy Swims",
			"song": "Lose Control",
			"currentPosition": "9",
			"lastWeek": "9",
			"peakPosition": "1",
			"weeksOnChart": "53"
		},
		{
			"artist": "Hozier",
			"song": "Too Sweet",
			"currentPosition": "10",
			"lastWeek": "10",
			"peakPosition": "1",
			"weeksOnChart": "21"
		},
		{
			"artist": "Benson Boone",
			"song": "Beautiful Things",
			"currentPosition": "11",
			"lastWeek": "11",
			"peakPosition": "2",
			"weeksOnChart": "30"
		},
		{
			"artist": "Morgan Wallen Featuring ERNEST",
			"song": "Cowgirls",
			"currentPosition": "12",
			"lastWeek": "13",
			"peakPosition": "12",
			"weeksOnChart": "35"
		},
		{
			"artist": "Luke Combs",
			"song": "Ain't No Love In Oklahoma",
			"currentPosition": "13",
			"lastWeek": "14",
			"peakPosition": "13",
			"weeksOnChart": "13"
		},
		{
			"artist": "Zach Bryan",
			"song": "Pink Skies",
			"currentPosition": "14",
			"lastWeek": "16",
			"peakPosition": "6",
			"weeksOnChart": "12"
		},
		{
			"artist": "Morgan Wallen",
			"song": "Lies Lies Lies",
			"currentPosition": "15",
			"lastWeek": "15",
			"peakPosition": "7",
			"weeksOnChart": "6"
		},
		{
			"artist": "Chappell Roan",
			"song": "Hot To Go!",
			"currentPosition": "16",
			"lastWeek": "17",
			"peakPosition": "16",
			"weeksOnChart": "11"
		},
		{
			"artist": "Zach Bryan Featuring Kacey Musgraves",
			"song": "I Remember Everything",
			"currentPosition": "17",
			"lastWeek": "21",
			"peakPosition": "1",
			"weeksOnChart": "51"
		},
		{
			"artist": "Dasha",
			"song": "Austin",
			"currentPosition": "18",
			"lastWeek": "22",
			"peakPosition": "18",
			"weeksOnChart": "23"
		},
		{
			"artist": "Marshmello & Kane Brown",
			"song": "Miles On It",
			"currentPosition": "19",
			"lastWeek": "18",
			"peakPosition": "18",
			"weeksOnChart": "15"
		},
		{
			"artist": "Charli xcx Featuring Billie Eilish",
			"song": "Guess",
			"currentPosition": "20",
			"lastWeek": "12",
			"peakPosition": "12",
			"weeksOnChart": "2"
		},
		{
			"artist": "Future, Metro Boomin & Kendrick Lamar",
			"song": "Like That",
			"currentPosition": "21",
			"lastWeek": "19",
			"peakPosition": "1",
			"weeksOnChart": "21"
		},
		{
			"artist": "SZA",
			"song": "Saturn",
			"currentPosition": "22",
			"lastWeek": "23",
			"peakPosition": "6",
			"weeksOnChart": "25"
		},
		{
			"artist": "Hanumankind X Kalmi",
			"song": "Big Dawgs",
			"currentPosition": "23",
			"lastWeek": "31",
			"peakPosition": "23",
			"weeksOnChart": "3"
		},
		{
			"artist": "Eminem",
			"song": "Houdini",
			"currentPosition": "24",
			"lastWeek": "20",
			"peakPosition": "2",
			"weeksOnChart": "11"
		},
		{
			"artist": "Jordan Adetunji",
			"song": "Kehlani",
			"currentPosition": "25",
			"lastWeek": "26",
			"peakPosition": "25",
			"weeksOnChart": "8"
		},
		{
			"artist": "Chappell Roan",
			"song": "Pink Pony Club",
			"currentPosition": "26",
			"lastWeek": "29",
			"peakPosition": "26",
			"weeksOnChart": "9"
		},
		{
			"artist": "Zach Bryan",
			"song": "28",
			"currentPosition": "27",
			"lastWeek": "25",
			"peakPosition": "14",
			"weeksOnChart": "6"
		},
		{
			"artist": "Drake, Young Thug & 21 Savage",
			"song": "It's Up",
			"currentPosition": "28",
			"lastWeek": "-",
			"peakPosition": "28",
			"weeksOnChart": "1"
		},
		{
			"artist": "Jimin",
			"song": "Who",
			"currentPosition": "29",
			"lastWeek": "24",
			"peakPosition": "12",
			"weeksOnChart": "4"
		},
		{
			"artist": "Post Malone Featuring Blake Shelton",
			"song": "Pour Me A Drink",
			"currentPosition": "30",
			"lastWeek": "28",
			"peakPosition": "12",
			"weeksOnChart": "8"
		},
		{
			"artist": "GloRilla & Megan Thee Stallion",
			"song": "Wanna Be",
			"currentPosition": "31",
			"lastWeek": "30",
			"peakPosition": "11",
			"weeksOnChart": "19"
		},
		{
			"artist": "Jelly Roll",
			"song": "I Am Not Okay",
			"currentPosition": "32",
			"lastWeek": "40",
			"peakPosition": "29",
			"weeksOnChart": "9"
		},
		{
			"artist": "Taylor Swift",
			"song": "I Can Do It With A Broken Heart",
			"currentPosition": "33",
			"lastWeek": "35",
			"peakPosition": "3",
			"weeksOnChart": "17"
		},
		{
			"artist": "Karol G",
			"song": "Si Antes Te Hubiera Conocido",
			"currentPosition": "34",
			"lastWeek": "32",
			"peakPosition": "32",
			"weeksOnChart": "8"
		},
		{
			"artist": "Noah Kahan",
			"song": "Stick Season",
			"currentPosition": "35",
			"lastWeek": "33",
			"peakPosition": "9",
			"weeksOnChart": "46"
		},
		{
			"artist": "Post Malone Featuring Luke Combs",
			"song": "Guy For That",
			"currentPosition": "36",
			"lastWeek": "34",
			"peakPosition": "17",
			"weeksOnChart": "3"
		},
		{
			"artist": "Megan Thee Stallion Featuring Yuki Chiba",
			"song": "Mamushi",
			"currentPosition": "37",
			"lastWeek": "46",
			"peakPosition": "36",
			"weeksOnChart": "7"
		},
		{
			"artist": "Benson Boone",
			"song": "Slow It Down",
			"currentPosition": "38",
			"lastWeek": "36",
			"peakPosition": "34",
			"weeksOnChart": "21"
		},
		{
			"artist": "Nate Smith",
			"song": "Bulletproof",
			"currentPosition": "39",
			"lastWeek": "42",
			"peakPosition": "37",
			"weeksOnChart": "19"
		},
		{
			"artist": "Koe Wetzel & Jessie Murph",
			"song": "High Road",
			"currentPosition": "40",
			"lastWeek": "27",
			"peakPosition": "22",
			"weeksOnChart": "10"
		},
		{
			"artist": "Chappell Roan",
			"song": "Red Wine Supernova",
			"currentPosition": "41",
			"lastWeek": "47",
			"peakPosition": "41",
			"weeksOnChart": "11"
		},
		{
			"artist": "Ariana Grande",
			"song": "We Can't Be Friends (Wait For Your Love)",
			"currentPosition": "42",
			"lastWeek": "37",
			"peakPosition": "1",
			"weeksOnChart": "23"
		},
		{
			"artist": "GloRilla",
			"song": "TGIF",
			"currentPosition": "43",
			"lastWeek": "50",
			"peakPosition": "28",
			"weeksOnChart": "8"
		},
		{
			"artist": "Myles Smith",
			"song": "Stargazing",
			"currentPosition": "44",
			"lastWeek": "44",
			"peakPosition": "40",
			"weeksOnChart": "14"
		},
		{
			"artist": "Sabrina Carpenter",
			"song": "Feather",
			"currentPosition": "45",
			"lastWeek": "43",
			"peakPosition": "21",
			"weeksOnChart": "37"
		},
		{
			"artist": "Charli xcx",
			"song": "360",
			"currentPosition": "46",
			"lastWeek": "41",
			"peakPosition": "41",
			"weeksOnChart": "10"
		},
		{
			"artist": "Cody Johnson",
			"song": "Dirt Cheap",
			"currentPosition": "47",
			"lastWeek": "51",
			"peakPosition": "43",
			"weeksOnChart": "17"
		},
		{
			"artist": "Teddy Swims",
			"song": "The Door",
			"currentPosition": "48",
			"lastWeek": "56",
			"peakPosition": "48",
			"weeksOnChart": "11"
		},
		{
			"artist": "Taylor Swift Featuring Post Malone",
			"song": "Fortnight",
			"currentPosition": "49",
			"lastWeek": "38",
			"peakPosition": "1",
			"weeksOnChart": "17"
		},
		{
			"artist": "Ella Langley Featuring Riley Green",
			"song": "You Look Like You Love Me",
			"currentPosition": "50",
			"lastWeek": "49",
			"peakPosition": "36",
			"weeksOnChart": "8"
		},
		{
			"artist": "Charli xcx",
			"song": "Apple",
			"currentPosition": "51",
			"lastWeek": "52",
			"peakPosition": "51",
			"weeksOnChart": "4"
		},
		{
			"artist": "Billie Eilish",
			"song": "Wildflower",
			"currentPosition": "52",
			"lastWeek": "55",
			"peakPosition": "17",
			"weeksOnChart": "13"
		},
		{
			"artist": "Moneybagg Yo Featuring Morgan Wallen",
			"song": "Whiskey Whiskey",
			"currentPosition": "53",
			"lastWeek": "53",
			"peakPosition": "21",
			"weeksOnChart": "9"
		},
		{
			"artist": "Billie Eilish",
			"song": "Lunch",
			"currentPosition": "54",
			"lastWeek": "39",
			"peakPosition": "5",
			"weeksOnChart": "13"
		},
		{
			"artist": "FloyyMenor X Cris Mj",
			"song": "Gata Only",
			"currentPosition": "55",
			"lastWeek": "54",
			"peakPosition": "27",
			"weeksOnChart": "22"
		},
		{
			"artist": "Gunna",
			"song": "One Of Wun",
			"currentPosition": "56",
			"lastWeek": "57",
			"peakPosition": "26",
			"weeksOnChart": "14"
		},
		{
			"artist": "Central Cee & Lil Baby",
			"song": "BAND4BAND",
			"currentPosition": "57",
			"lastWeek": "58",
			"peakPosition": "18",
			"weeksOnChart": "12"
		},
		{
			"artist": "The Kid LAROI",
			"song": "Nights Like This",
			"currentPosition": "58",
			"lastWeek": "60",
			"peakPosition": "47",
			"weeksOnChart": "8"
		},
		{
			"artist": "Chappell Roan",
			"song": "Casual",
			"currentPosition": "59",
			"lastWeek": "62",
			"peakPosition": "59",
			"weeksOnChart": "8"
		},
		{
			"artist": "mgk & Jelly Roll",
			"song": "Lonely Road",
			"currentPosition": "60",
			"lastWeek": "59",
			"peakPosition": "33",
			"weeksOnChart": "3"
		},
		{
			"artist": "Dustin Lynch Featuring Jelly Roll",
			"song": "Chevrolet",
			"currentPosition": "61",
			"lastWeek": "64",
			"peakPosition": "61",
			"weeksOnChart": "9"
		},
		{
			"artist": "Real Boston Richey",
			"song": "Help Me",
			"currentPosition": "62",
			"lastWeek": "71",
			"peakPosition": "62",
			"weeksOnChart": "4"
		},
		{
			"artist": "Drake",
			"song": "Blue Green Red",
			"currentPosition": "63",
			"lastWeek": "-",
			"peakPosition": "63",
			"weeksOnChart": "1"
		},
		{
			"artist": "Lainey Wilson",
			"song": "Hang Tight Honey",
			"currentPosition": "64",
			"lastWeek": "61",
			"peakPosition": "61",
			"weeksOnChart": "9"
		},
		{
			"artist": "Ariana Grande",
			"song": "The Boy Is Mine",
			"currentPosition": "65",
			"lastWeek": "68",
			"peakPosition": "16",
			"weeksOnChart": "15"
		},
		{
			"artist": "Chappell Roan",
			"song": "Femininomenon",
			"currentPosition": "66",
			"lastWeek": "70",
			"peakPosition": "66",
			"weeksOnChart": "4"
		},
		{
			"artist": "Chris Stapleton",
			"song": "Think I'm In Love With You",
			"currentPosition": "67",
			"lastWeek": "75",
			"peakPosition": "49",
			"weeksOnChart": "15"
		},
		{
			"artist": "¥$: Kanye West & Ty Dolla $ign Featuring Playboi Carti, Kodak Black & Don Toliver",
			"song": "Field Trip",
			"currentPosition": "68",
			"lastWeek": "48",
			"peakPosition": "48",
			"weeksOnChart": "2"
		},
		{
			"artist": "Billie Eilish",
			"song": "Chihiro",
			"currentPosition": "69",
			"lastWeek": "72",
			"peakPosition": "12",
			"weeksOnChart": "13"
		},
		{
			"artist": "Tommy Richman",
			"song": "Devil Is A Lie",
			"currentPosition": "70",
			"lastWeek": "63",
			"peakPosition": "32",
			"weeksOnChart": "9"
		},
		{
			"artist": "Tucker Wetmore",
			"song": "Wind Up Missin' You",
			"currentPosition": "71",
			"lastWeek": "73",
			"peakPosition": "63",
			"weeksOnChart": "20"
		},
		{
			"artist": "Tinashe",
			"song": "Nasty",
			"currentPosition": "72",
			"lastWeek": "69",
			"peakPosition": "61",
			"weeksOnChart": "11"
		},
		{
			"artist": "Fuerza Regida",
			"song": "Nel",
			"currentPosition": "73",
			"lastWeek": "90",
			"peakPosition": "73",
			"weeksOnChart": "3"
		},
		{
			"artist": "Gracie Abrams",
			"song": "I Love You, I'm Sorry",
			"currentPosition": "74",
			"lastWeek": "83",
			"peakPosition": "74",
			"weeksOnChart": "2"
		},
		{
			"artist": "Peso Pluma & Neton Vega",
			"song": "La Patrulla",
			"currentPosition": "75",
			"lastWeek": "85",
			"peakPosition": "75",
			"weeksOnChart": "4"
		},
		{
			"artist": "Luis R Conriquez x Neton Vega",
			"song": "Si No Quieres No",
			"currentPosition": "76",
			"lastWeek": "77",
			"peakPosition": "53",
			"weeksOnChart": "15"
		},
		{
			"artist": "Thomas Rhett",
			"song": "Beautiful As You",
			"currentPosition": "77",
			"lastWeek": "81",
			"peakPosition": "77",
			"weeksOnChart": "10"
		},
		{
			"artist": "Mark Ambor",
			"song": "Belong Together",
			"currentPosition": "78",
			"lastWeek": "82",
			"peakPosition": "74",
			"weeksOnChart": "15"
		},
		{
			"artist": "Zach Bryan",
			"song": "American Nights",
			"currentPosition": "79",
			"lastWeek": "80",
			"peakPosition": "21",
			"weeksOnChart": "6"
		},
		{
			"artist": "Sexyy Red & Drake",
			"song": "U My Everything",
			"currentPosition": "80",
			"lastWeek": "84",
			"peakPosition": "44",
			"weeksOnChart": "12"
		},
		{
			"artist": "Chappell Roan",
			"song": "My Kink Is Karma",
			"currentPosition": "81",
			"lastWeek": "91",
			"peakPosition": "81",
			"weeksOnChart": "2"
		},
		{
			"artist": "Dua Lipa",
			"song": "Illusion",
			"currentPosition": "82",
			"lastWeek": "67",
			"peakPosition": "43",
			"weeksOnChart": "18"
		},
		{
			"artist": "Richy Mitch And The Coal Miners",
			"song": "Evergreen",
			"currentPosition": "83",
			"lastWeek": "-",
			"peakPosition": "83",
			"weeksOnChart": "1"
		},
		{
			"artist": "Shawn Mendes",
			"song": "Why Why Why",
			"currentPosition": "84",
			"lastWeek": "-",
			"peakPosition": "84",
			"weeksOnChart": "1"
		},
		{
			"artist": "Drake Featuring Latto",
			"song": "Housekeeping Knows",
			"currentPosition": "85",
			"lastWeek": "-",
			"peakPosition": "85",
			"weeksOnChart": "1"
		},
		{
			"artist": "Megan Moroney",
			"song": "Am I Okay?",
			"currentPosition": "86",
			"lastWeek": "86",
			"peakPosition": "86",
			"weeksOnChart": "2"
		},
		{
			"artist": "Koe Wetzel",
			"song": "Sweet Dreams",
			"currentPosition": "87",
			"lastWeek": "95",
			"peakPosition": "35",
			"weeksOnChart": "13"
		},
		{
			"artist": "Luke Bryan",
			"song": "Love You, Miss You, Mean It",
			"currentPosition": "88",
			"lastWeek": "99",
			"peakPosition": "88",
			"weeksOnChart": "2"
		},
		{
			"artist": "Pharrell Williams",
			"song": "Double Life",
			"currentPosition": "89",
			"lastWeek": "-",
			"peakPosition": "89",
			"weeksOnChart": "1"
		},
		{
			"artist": "The Kid LAROI",
			"song": "Girls",
			"currentPosition": "90",
			"lastWeek": "-",
			"peakPosition": "51",
			"weeksOnChart": "6"
		},
		{
			"artist": "Bailey Zimmerman",
			"song": "Holy Smokes",
			"currentPosition": "91",
			"lastWeek": "-",
			"peakPosition": "54",
			"weeksOnChart": "5"
		},
		{
			"artist": "Latto",
			"song": "Big Mama",
			"currentPosition": "92",
			"lastWeek": "-",
			"peakPosition": "92",
			"weeksOnChart": "1"
		},
		{
			"artist": "Drew Baldridge",
			"song": "She's Somebody's Daughter (Reimagined)",
			"currentPosition": "93",
			"lastWeek": "-",
			"peakPosition": "93",
			"weeksOnChart": "1"
		},
		{
			"artist": "Ice Spice & Central Cee",
			"song": "Did It First",
			"currentPosition": "94",
			"lastWeek": "65",
			"peakPosition": "51",
			"weeksOnChart": "5"
		},
		{
			"artist": "Kendrick Lamar",
			"song": "Euphoria",
			"currentPosition": "95",
			"lastWeek": "92",
			"peakPosition": "3",
			"weeksOnChart": "16"
		},
		{
			"artist": "Sevdaliza, Pabllo Vittar & Yseult",
			"song": "Alibi",
			"currentPosition": "96",
			"lastWeek": "96",
			"peakPosition": "95",
			"weeksOnChart": "4"
		},
		{
			"artist": "Chris Brown",
			"song": "Residuals",
			"currentPosition": "97",
			"lastWeek": "-",
			"peakPosition": "97",
			"weeksOnChart": "1"
		},
		{
			"artist": "Tucker Wetmore",
			"song": "Wine Into Whiskey",
			"currentPosition": "98",
			"lastWeek": "98",
			"peakPosition": "68",
			"weeksOnChart": "20"
		},
		{
			"artist": "JT",
			"song": "Okay",
			"currentPosition": "99",
			"lastWeek": "-",
			"peakPosition": "72",
			"weeksOnChart": "6"
		},
		{
			"artist": "Mustard & Travis Scott",
			"song": "Parking Lot",
			"currentPosition": "100",
			"lastWeek": "97",
			"peakPosition": "57",
			"weeksOnChart": "5"
		}
	]
}
```
</details>


#### Search Hot100 Songs
```
http://localhost:80/songs/get?date=2024-08-21&songName=bi
```

<details>
<summary>Response Example</summary>

```

[
	{
		"artist": "Billie Eilish",
		"song": "Birds Of A Feather",
		"currentPosition": "5",
		"lastWeek": "7",
		"peakPosition": "5",
		"weeksOnChart": "13"
	},
	{
		"artist": "Hanumankind X Kalmi",
		"song": "Big Dawgs",
		"currentPosition": "23",
		"lastWeek": "31",
		"peakPosition": "23",
		"weeksOnChart": "3"
	},
	{
		"artist": "Karol G",
		"song": "Si Antes Te Hubiera Conocido",
		"currentPosition": "34",
		"lastWeek": "32",
		"peakPosition": "32",
		"weeksOnChart": "8"
	},
	{
		"artist": "Latto",
		"song": "Big Mama",
		"currentPosition": "92",
		"lastWeek": "-",
		"peakPosition": "92",
		"weeksOnChart": "1"
	},
	{
		"artist": "Sevdaliza, Pabllo Vittar & Yseult",
		"song": "Alibi",
		"currentPosition": "96",
		"lastWeek": "96",
		"peakPosition": "95",
		"weeksOnChart": "4"
	}
]

```

</details>

#### Get top n songs on Hot100
```
http://localhost:80/hot100Chart/get?date=2024-08-21&top=5
```

<details> 
<summary>Response Example</summary>

```

[
	{
		"artist": "Shaboozey",
		"song": "A Bar Song (Tipsy)",
		"currentPosition": "1",
		"lastWeek": "1",
		"peakPosition": "1",
		"weeksOnChart": "18"
	},
	{
		"artist": "Post Malone Featuring Morgan Wallen",
		"song": "I Had Some Help",
		"currentPosition": "2",
		"lastWeek": "2",
		"peakPosition": "1",
		"weeksOnChart": "14"
	},
	{
		"artist": "Kendrick Lamar",
		"song": "Not Like Us",
		"currentPosition": "3",
		"lastWeek": "3",
		"peakPosition": "1",
		"weeksOnChart": "15"
	},
	{
		"artist": "Sabrina Carpenter",
		"song": "Espresso",
		"currentPosition": "4",
		"lastWeek": "4",
		"peakPosition": "3",
		"weeksOnChart": "18"
	},
	{
		"artist": "Billie Eilish",
		"song": "Birds Of A Feather",
		"currentPosition": "5",
		"lastWeek": "7",
		"peakPosition": "5",
		"weeksOnChart": "13"
	}
]

```
</details>

### 
## Run the app
```
nodemon start app.js
```
## Installation
### Server
```
npm i express
```
```
npm i mongoose
```
```
npm i puppeteer
```
```
npm i dotenv
```
```
npm i puppeteer
```
### Client
```
npm i react-router
```
```
npm i react-router-dom
```
```
npm i chart.js
```
```
npm i react-chartjs-2
```
