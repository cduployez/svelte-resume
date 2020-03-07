/**
 * ELément de la catégorie 'Expérience'
 */
export class ExperienceItem {

    /**
     * Constructor
     *
     * @param cvDate CvDate - Date de l'élement concerné
     * @param enterprise string - Entreprise
     * @param jobType string - Type d'emploi (Alternance, CDD, CDI...)
     * @param project string - Projet
     * @param descriptions string[] - Description
     * @param skills SkillBadge[] - Compétences
     */
    constructor(cvDate, enterprise, jobType, project, descriptions, skills) {
        this.cvDate = cvDate;
        this.enterprise = enterprise;
        this.jobType = jobType;
        this.project = project;
        this.descriptions = descriptions;
        this.skills = skills;
    }
}
