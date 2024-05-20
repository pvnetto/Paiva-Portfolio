import { techs, roles, categories } from './types';
import growtopiaThumb from '../../../../public/images/projects/gt_logo.png';

const growtopiaInfo = {
    title: 'Growtopia',
    category: categories.GAMES,
    techs: [techs.CPP, techs.UNREAL],
    roles: [roles.PROGRAMMER],
    thumbnail: growtopiaThumb,
    links: {
        live: 'https://www.growtopiagame.com/',
    },
    description: [
        `From Wikipedia: Growtopia, commonly abbreviated as GT, is a massively multiplayer online sandbox video game developed by Ubisoft Abu Dhabi and formerly by indie
        developers Robinson Technologies and Hamumu Software where players can farm, build worlds, converse with others, and engage in player versus player combat.The
        game was initially released for Android in November 2012, and later for iOS, Microsoft Windows, and OS X in 2013. It was also released for the Nintendo Switch, 
        PlayStation 4, and Xbox One in 2019, but support for each console would later be discontinued on July 30, 2020.`,
    ],
};

export default growtopiaInfo;