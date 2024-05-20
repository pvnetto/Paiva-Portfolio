import { techs, roles, categories } from './types';
import wonderboxThumb from '../../../../public/images/projects/wonderbox_logo.jpg';

const wonderboxInfo = {
    title: 'Wonderbox: The Adventure Maker',
    category: categories.GAMES,
    techs: [techs.CPP, techs.UNREAL],
    roles: [roles.PROGRAMMER],
    thumbnail: wonderboxThumb,
    links: {
        live: 'https://www.playwonderbox.com/',
    },
    description: [
        `Wonderbox: The Adventure Maker is an adventure video game developed and published by Aquiris Game Studio for iOS, iPadOS, macOS, and tvOS.`,
    ],
};

export default wonderboxInfo;