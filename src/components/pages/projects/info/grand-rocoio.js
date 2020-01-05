import { techs, roles, categories } from './types';
import { importAll } from './helpers';
import rocoioThumb from '../../../../public/images/projects/grand_rocoio_logo.png';

const grandRocoioImages = importAll(
    require.context('../../../../public/images/projects/grand_rocoio', false, /\.(png|jpe?g|svg)$/)
);

const grandRocoioInfo = {
    title: 'Grand Roçoio',
    category: categories.GAMES,
    techs: [techs.UNITY3D],
    roles: [roles.PROGRAMMER, roles.GAME_DESIGNER],
    thumbnail: rocoioThumb,
    links: {
        live: 'https://gamejolt.com/games/grand_rocoio/454501',
    },
    description: [
        `Grand Roçoio is a 2D sidescroller strategy game with collecting mechanics, themed over brazilian potiguar culture, which has its origin from
        Rio Grande do Norte, a state from the brazilian northeast region. It was made during Natal Game Jam 2019, an event
        organized by the local government to incite local game developers to make games based on the local culture, with a prize pool of R$10000.00
        for the best 3 games chosen by the jury.`,

        `In Grand Roçoio the player takes the role of a Cangaço leader. Its objective is to organize his troops to fight against other Cangaço groups,
        and to do so, the player must hire characters using resources that can be acquired by winning fights. When the player acquires two
        equal units, he can mix them together to make a more powerful, evolved one.`,
    ],
    images: grandRocoioImages,
    awards: ["Natal Game Jam - 2nd Best Game"]
};

export default grandRocoioInfo;