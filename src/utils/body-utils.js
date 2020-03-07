export const bodyUtils = {

    addClass: (cssClass) => {
        window.document.body.classList.add(cssClass);
    },

    removeClass: (cssClass) => {
        window.document.body.classList.remove(cssClass);
    },

    updateTheme: (themeInfo) => {
        if (themeInfo.previousTheme) {
            bodyUtils.removeClass(themeInfo.previousTheme);
        }
        bodyUtils.addClass(themeInfo.currentTheme);
    }

};
