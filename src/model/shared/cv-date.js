export class CvDate {

    /**
     * Constructor
     *
     * @param beginDate Begin date - Date
     * @param endDate End date - Date
     * @param format Display months or only years - 'year' | 'month'
     */
    constructor(beginDate, endDate, format) {
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.format = format;
    }

    getBeginDateFormat() {
        return this.formatDate(this.beginDate, this.format);
    }

    getEndDateFormat() {
        return this.formatDate(this.endDate, this.format);
    }

    formatDate(date, format) {
        if (!date) {
            return null;
        }
        if (!format) {
            return this.formatDate('year');
        }

        switch (format) {
            case 'month':
                return `${date.getMonth() + 1} ${date.getFullYear()}`;
            case 'year':
                return `${date.getFullYear()}`;
        }
    }

}
