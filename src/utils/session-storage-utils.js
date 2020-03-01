const THEME_KEY = 'theme';
const MENU_BAR_MINIMIZED_KEY = 'menuBarMinimized';

export const sessionStorageUtils = {

    getTheme: () => sessionStorage.getItem(THEME_KEY),
    setTheme: (t) => sessionStorage.setItem(THEME_KEY, t),

    getMenuBarMinimzed: () => sessionStorage.getItem(MENU_BAR_MINIMIZED_KEY),
    setMenuBarMinimzed: (m) => sessionStorage.setItem(MENU_BAR_MINIMIZED_KEY, m)
};
