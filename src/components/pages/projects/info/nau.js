import { techs, roles, categories } from './types';
import { importAll } from './helpers';
import nauThumb from '../../../../public/images/projects/nau_thumb.png';

const nauImages = importAll(
    require.context('../../../../public/images/projects/nau', false, /\.(png|jpe?g|svg)$/)
);

const nauInfo = {
    title: 'Nau Frutos do Mar',
    category: categories.WEB,
    techs: [techs.VANILLA_JS],
    roles: [roles.PROGRAMMER],
    thumbnail: nauThumb,
    links: {
        live: 'https://nau-restaurante.herokuapp.com/',
        github: 'https://github.com/pvnetto/Nau-Website-Redesign',
    },
    description: [
        `This project is a redesign I made for a local seafood restaurant. It's not an official redesign, so the company didn't ask me to do it,
        I did it for study purposes only.`,

        `The main goal of this project was to make an outdated website from a well-established local brand more fit to the current
        standards of web development, with a modern, mobile-first design.`
    ],
    images: nauImages,
    awards: []
};

export default nauInfo;