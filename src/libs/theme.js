export const THEME_DARK = 'dark'
export const THEME_LIGHT = 'light'
export const getTheme = () => {
    let theme = 'dark'
    if (window.jumbotronPosters && window.jumbotronPosters.theme) {
        theme = window.jumbotronPosters.theme;
    }
    return theme
}

export const isTheme = type => {
    return getTheme() === type
}