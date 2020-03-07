import {dateUtils} from "./date-utils.js";
import {CvDate} from "../model/shared/cv-date";

export const cvDateUtils = {

    year: (year) => {
        const date = DateUtils.fromYear(year);
        return new CvDate(date, date, 'year');
    },

    yearRange: (beginYear, endYear) => {
        return new CvDate(dateUtils.fromYear(beginYear), dateUtils.fromYear(endYear), 'year');
    },

    monthRange: (beginDate, endDate) => {
        return new CvDate(beginDate, endDate, 'month');
    }

};
