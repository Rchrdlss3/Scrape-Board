import { lightTheme } from "../models/themes"

export const topSongsComponentWrapper = () => {
    return {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    }
}
export const topSongsWrapper = () => {
    return {
        display: 'flex',
        flexDirection: 'row',
        width:'90%',
        textAlign: 'center',
        overflowX: 'scroll',
        alignItems: 'center',
    }
}

export const searchedResult = () => {
    return {
        display: 'flex',
        width: '200px',
        flexShrink: '0',
        flexDirection: 'column',
    }
}

export const searchedPosition = () => {
    return {
        fontSize: '1.5rem'
    }
}

export const searchedSong = () => {
    return {
        fontSize: '1rem'
    }
}

export const searchedArtist = () => {
    return {
        fontSize: '0.8rem'
    }
}

export const searchedResultsWrapper = (theme) => {
    return {
        height : '500px',
        overflowY: 'scroll',
        width: '800px',
        backgroundColor: `${theme.primary}01`,
        borderRadius: '5px',
        listStyle: 'none',
        padding: 0
    }
}

export const searchedListStyle = (theme,index) => {
    return {
        margin: '5px',
        height: '75px',
        backgroundColor: index % 2 == 0 ? `${theme.font.regular}10` : null,
        alignContent: 'center',
        padding: 0,
        borderRadius: '5px'
    }
}

export const inputStyle = (theme) => {
    return {
        backgroundColor: `${theme.font.regular}15`, 
        borderRadius: '5px',
        width: '800px',
        height: '60px',
        color: theme.font.regular,
        margin: '10px',
        textAlign: 'center',
        fontSize: '1.5em',
        border: 'none',
    }
}

export const calendarStyle = (theme) => {
    return {
            border: `1px solid ${theme.font.regular}`,
            borderRadius: '5px',
            width: '110px',
            height: '20px',
            colorScheme: theme == lightTheme ? 'light' : 'dark'
    }
}