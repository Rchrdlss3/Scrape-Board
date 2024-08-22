const backEndURL = 'http://localhost:80';

export const currentDate = new Date().toISOString().slice(0,10);

export const URLS = {
    getHot100: (dateQuery,top) => 
        {
        return top ? `${backEndURL}/hot100Chart/get?date=${dateQuery}&top=${top}` : `${backEndURL}/hot100Chart/get?date=${dateQuery}`
        },
    getSong: (dateQuery,songName) => { return `${backEndURL}/songs/get?date=${dateQuery}&songName=${songName}`}
}

export const navigationLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Search",
        path: "/search"
    }
]