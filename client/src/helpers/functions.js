import { URLS } from "./constants";

export const getHot100 = async (dateQuery,top) => {
    try {
        const response = await fetch(top ? URLS.getHot100(dateQuery,top) : URLS.getHot100(dateQuery) )
        const json = await response.json()
        return json
    } catch (e) {
        console.log(e)
    }
}

export const searchHot100 = async (dateQuery,songName) => {
    try {
        const response = await fetch(URLS.getSong(dateQuery,songName))
        const json = response.json()
        return json
    } catch (e) {
        console.log(e)
    }
}

export function debounce (cb,delay = 1000) {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        },delay)
    }
}