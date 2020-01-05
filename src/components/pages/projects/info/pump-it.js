import { techs, roles, categories } from './types';
import { importAll } from './helpers';
import pumpItThumb from '../../../../public/images/projects/pump_it_logo.png';

const pumpItImages = importAll(
    require.context('../../../../public/images/projects/pump_it', false, /\.(png|jpe?g|svg)$/)
);

const pumpItInfo = {
    title: 'Pump It',
    category: categories.GAMES,
    techs: [techs.UNITY3D],
    roles: [roles.PROGRAMMER, roles.GAME_DESIGNER],
    thumbnail: pumpItThumb,
    links: {
        live: 'https://gamejolt.com/games/pump_it/420017',
    },
    description: [
        `Pump It is a 2D sidescroller game for PC that mixes rhythm with resource management. The player controls the heart of a living 
        person in its struggle to collect and send red and white cells to the rest of the organs in order to keep the 
        human alive while avoiding bacterias. Poorly manage your resources and you find yourself having to beat faster and faster, 
        leading to a much harder game over time.`,

        `Weak organs also affect your experience. While weak kidneys might increase the amount of bacterias in your veins, a weak 
        brain will suddenly strike you with a debuff what will move you the opposite direction you choose. Manage carefully!`
    ],
    images: pumpItImages,
    awards: []
};

export default pumpItInfo;