import {sessionStorageUtils} from "./session-storage-utils.js";
import {bodyUtils} from "./body-utils.js";

const THEMES = ['light-theme', 'dark-theme'];

export const themeUtils = {
    isOsInDarkMode: function () {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    },

    lightTheme: function () {
        return 'light-theme';
    },

    darkTheme: function () {
        return 'dark-theme';
    },

    defaultTheme: function () {
        const saved = sessionStorageUtils.getTheme();
        if (saved === themeUtils.lightTheme() || saved === themeUtils.darkTheme()) {
            return saved;
        }
        return themeUtils.isOsInDarkMode() ? themeUtils.darkTheme() : themeUtils.lightTheme();
    },

    onThemeChange: (themeInfo) => {
        if (themeInfo) {
            sessionStorageUtils.setTheme(themeInfo.currentTheme);
            bodyUtils.updateTheme(themeInfo);
        }
    },

    nextTheme: (themeStore, themeStoreData) => {
        const currentIndex = THEMES.indexOf(themeStoreData.currentTheme);
        const theme = THEMES[(currentIndex + 1) % THEMES.length];
        themeStore.update(data => {
            return {previousTheme: data.currentTheme, currentTheme: theme}
        });
        return theme;
    }
};
