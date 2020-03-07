import {skills} from "../model/skill/skills";

const JAVA_KEYWORD = [skills.JAVA];
const PYTHON_KEYWORD = [skills.PYTHON];
const C_SHARP_KEYWORD = [skills.C_SHARP];

export const skillsUtils = {
    javaKeyword: JAVA_KEYWORD,

    mySqlKeyword: [skills.MYSQL],

    springKeyword: [skills.SPRING],

    springChildrenKeywords: JAVA_KEYWORD,

    keycloakKeyword: [skills.KEYCLOAK],

    javaEeKeyword: [skills.JAVA_EE],

    javaEeChildrenKeywords: JAVA_KEYWORD,

    pythonKeyword: PYTHON_KEYWORD,

    openCvChildrenKeywords: PYTHON_KEYWORD,

    androidChildrenKeywords: JAVA_KEYWORD,

    xamarinChildrenKeywords: [skills.C_SHARP, skills.ANDROID],

    cSharpKeyword: C_SHARP_KEYWORD,

    mvcNetKeyword: [skills.MVC_NET],

    netChildrenKeywords: C_SHARP_KEYWORD,

    mvcNetChildrenKeywords: [skills.C_SHARP, skills.HTML],

    angularKeyword: [skills.ANGULAR],

    angularChildrenKeywords: [skills.TYPESCRIPT, skills.CSS, skills.HTML],

    webKeywords: [skills.HTML, skills.CSS, skills.JAVASCRIPT],

    mongoDbKeyword: [skills.MONGODB],

    dockerKeyword: [skills.DOCKER],

    linuxKeyword: [skills.LINUX]
};
