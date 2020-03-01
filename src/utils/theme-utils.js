import {bodyUtils} from "./body-utils.js";
import {sessionStorageUtils} from "./session-storage-utils.js";

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
        if (saved === this.lightTheme() || saved === this.darkTheme()) {
            return saved;
        }
        return this.isOsInDarkMode() ? this.darkTheme() : this.lightTheme();
    },

    onThemeChange: (themeInfo) => {
        if (themeInfo) {
            bodyUtils.removeBodyClass(themeInfo.previousTheme);
            bodyUtils.addBodyClass(themeInfo.currentTheme);
            sessionStorageUtils.setTheme(themeInfo.currentTheme);
        }
    }
};
