import {dateUtils} from "../utils/date-utils.js";

export const profileConsts = {
    firstName: 'Clément',

    lastName: 'DUPLOYEZ',

    email: 'c.duployez+github@gmail.com',

    age: dateUtils.toAge(dateUtils.fromDate(5, 7, 1994)),

    city: 'Lillois',

    driverLicense: 'Permis B (Véhicule)',

    goals: [
        'Développement logiciel en équipe',
        'Evolution souhaitée vers l\'expertise technique'
    ]
};
