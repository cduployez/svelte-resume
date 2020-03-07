export const dateUtils = {

    fromYear: (year) => {
        return new Date(year, 0, 1, 0, 0, 0, 0);
    },

    /**
     * Source : https://stackoverflow.com/a/21984136
     * @param birthday Date d'anniversaire
     */
    toAge: (birthday) => {
        const dateDiff = Date.now() - birthday.getTime();
        const ageDate = new Date(dateDiff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    },

    fromDate(day, month, year) {
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    }
}
