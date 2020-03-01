export const bodyUtils = {
    addBodyClass: (className) => {
        if (className) {
            window.document.body.classList.add(className);
        }
    },

    removeBodyClass: (className) => {
        if (className) {
            window.document.body.classList.remove(className);
        }
    }
};
