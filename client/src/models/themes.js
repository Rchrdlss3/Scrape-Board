export const Colors = {
    butterflyPurple : {
        rgba: 'rgba(78,64,158,255)',
        hex: '#4e409e'
    },
    ceruleanBlue: {
        rgba:'rgba(50,91,175,255)',
        hex:'#325baf'
    },
    crystalBlue: {
        rgba: 'rgba(119,168,254)',
        hex: '#77a8fe'
    }
}
class Font {
    constructor(regular, link) {
        this.regular = regular;
        this.link = link;
    }
}

class Theme {
    constructor(primary, secondary, tertiary, main, font, isMobile, logo) {
        this.primary = primary;
        this.secondary = secondary;
        this.tertiary = tertiary;
        this.main = main;
        this.font = font;
        this.isMobile = isMobile;
        this.logo = logo;
    }
}

export const lightTheme = new Theme(
    "#ffffff",
    "#fcf5eb",
    "#f2d09e",
    Colors.butterflyPurple.hex,
    new Font("#000000",Colors.butterflyPurple.hex),
    false,
    ""
)

export const darkTheme = new Theme(
    "#000000",
    "#161006",
    "#72501f",
    Colors.butterflyPurple.hex,
    new Font("#ffffff",Colors.butterflyPurple.hex),
    false,
    ""
)