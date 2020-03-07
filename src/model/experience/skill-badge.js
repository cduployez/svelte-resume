export class SkillBadge {

    /**
     * Constructor
     *
     * @param title - string
     * @param keywords - skills values
     * @param childrenKeywords skills values
     */
    constructor(title, keywords, childrenKeywords) {
        this.title = title;
        this.keywords = keywords;
        this.childrenKeywords = childrenKeywords;
    }
}
