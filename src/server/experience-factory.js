import {ExperienceItem} from "../model/experience/experience-item";
import {cvDateUtils} from "../utils/cv-date-utils";
import {dateUtils} from "../utils/date-utils";
import {skillBadgeUtils} from "../utils/skill-badge-utils";
import {SkillBadge} from "../model/experience/skill-badge";
import {skillsUtils} from "../utils/skills-utils";

export const experienceFactory = {

    getAll: () => {
        return [
            new ExperienceItem(
                cvDateUtils.monthRange(dateUtils.fromDate(1, 1, 2017), /* Current */null),
                'Worldline',
                null,
                'Projet SI-VIC',
                ['Lead Developer au sein d\'une équipe en méthode agile, développement d\'une solution d\'aide aux victimes en cas d\'événements majeurs sur le territoire Français'],
                [
                    skillBadgeUtils.java,
                    new SkillBadge('Spring 5', skillsUtils.springKeyword, skillsUtils.springChildrenKeywords),
                    new SkillBadge('Keycloak', skillsUtils.keycloakKeyword),
                    new SkillBadge('Angular 8', skillsUtils.angularKeyword, skillsUtils.angularChildrenKeywords),
                    new SkillBadge('MySQL', skillsUtils.mySqlKeyword),
                    new SkillBadge('Etat d\'esprit agile')
                ]
            ),
            new ExperienceItem(
                cvDateUtils.monthRange(dateUtils.fromDate(1, 9, 2017), dateUtils.fromDate(31, 12, 2017)),
                'Worldline',
                null,
                'Projet Télépaiement',
                ['Mise en place du télépaiement des forfaits de post-stationnement'],
                [
                    skillBadgeUtils.java,
                    new SkillBadge('Java EE', skillsUtils.javaEeKeyword, skillsUtils.javaEeChildrenKeywords),
                    new SkillBadge('Web', skillsUtils.webKeywords),
                    new SkillBadge('MySQL', skillsUtils.mySqlKeyword)
                ]
            ),
            new ExperienceItem(
                cvDateUtils.monthRange(dateUtils.fromDate(1, 9, 2016), dateUtils.fromDate(31, 8, 2017)),
                'Worldline',
                'Alternance',
                'Projets Datadock, Saveurs & Vie ; Sujets de R&D',
                ['Assistant développeur sur différents projets de dématérialisation'],
                [
                    skillBadgeUtils.java,
                    new SkillBadge('Spring Boot', skillsUtils.springKeyword, skillsUtils.springChildrenKeywords),
                    new SkillBadge('Keycloak', skillsUtils.keycloakKeyword),
                    new SkillBadge('Angular 2', skillsUtils.angularKeyword, skillsUtils.angularChildrenKeywords),
                    new SkillBadge('Ionic 2', skillsUtils.angularKeyword, skillsUtils.angularChildrenKeywords),
                    new SkillBadge('MongoDB', skillsUtils.mongoDbKeyword),
                    new SkillBadge('Docker', skillsUtils.dockerKeyword)
                ]
            ),
            new ExperienceItem(
                cvDateUtils.monthRange(dateUtils.fromDate(1, 5, 2016), dateUtils.fromDate(31, 7, 2016)),
                'Intelligent Solutions',
                'Stage',
                'Projet IMail',
                ['Développement de modules et optimisation pour la solution d\'emailing professionnel IMAIL'],
                [
                    skillBadgeUtils.cSharp,
                    new SkillBadge('MVC .Net', skillsUtils.mvcNetKeyword, skillsUtils.mvcNetChildrenKeywords),
                    new SkillBadge('Web', skillsUtils.webKeywords),
                    new SkillBadge('SQL')
                ]
            ),
            new ExperienceItem(
                cvDateUtils.yearRange(2014, 2016),
                'ISEN',
                null,
                'Club Informatique',
                ['Responsable Evènementiel', 'Soutien des étudiants : cours, logiciel, matériel'],
                [
                    new SkillBadge('Linux', skillsUtils.linuxKeyword),
                    new SkillBadge('Organisationnel')
                ]
            )
        ];
    }

};
