export const appStyle = (theme) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '100vw',
        height: '100vh',
        transition: '1s',
        padding: 0,
        margin: 0,
        paddingTop: '5px',
        color: theme.font.regular,
        backgroundColor: theme.primary
    }
}

export const arrowStyle = (theme,rotate) => {
    return {
        border: `solid ${theme.font.regular}`,
        borderWidth: '0 3px 3px 0',
        display: 'inline-block',
        padding: '3px',
        transform: `rotate(${rotate}deg)`,
        WebkitTransform: `rotate(${rotate}deg)`,
        backgroundColor: theme.primary,
        width: '50px',
        height: '50px',

    }
}

export const leftArrow = () => {
    arrowStyle()
}
