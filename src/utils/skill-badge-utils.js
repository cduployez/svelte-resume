import {SkillBadge} from "../model/experience/skill-badge";
import {skillsUtils} from "./skills-utils";
import {skills} from "../model/skill/skills";

export const skillBadgeUtils = {

    java: new SkillBadge('Java', skillsUtils.javaKeyword),

    cSharp: new SkillBadge('C#', skillsUtils.cSharpKeyword),

    cPlusPlus: new SkillBadge('C++', [skills.C_PLUS_PLUS]),

};
