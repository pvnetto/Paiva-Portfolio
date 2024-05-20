import { techs, roles, categories } from './types';
import { importAll } from './helpers';
import chamaThumb from '../../../../public/images/projects/chama_logo.png';

const chamaImages = importAll(
    require.context('../../../../public/images/projects/chama', false, /\.(png|jpe?g|svg)$/)
);

const chamaInfo = {
    title: 'Chama! Bailão',
    category: categories.GAMES,
    techs: [techs.UNITY3D],
    roles: [roles.PROGRAMMER],
    thumbnail: chamaThumb,
    links: {
        live: 'https://gamejolt.com/games/chama-bailao/430813',
        instagram: 'https://www.instagram.com/chama_jogo/'
    },
    description: [
        `Chama! is a mobile rhythm game series about brazilian music styles. The first title 'Bailão' is about funk and bregafunk,
        which are currently two of the most popular styles in Brazil.`,

        `The player uses both thumbs to press and drag shown symbols in a sequence following the rhythm of the songs as your avatar 
        dances accordingly. Unlike other games which offer a linear path and a few short free movement sections, 'Chama! Bailão' 
        often gives the player the option to choose between three paths of movement, each one with a different difficulty and 
        resulting in different dance moves. The player can change to other paths during playthrough at given moments, so the difficulty is dynamic.`
        ,
    ],
    images: chamaImages,
    awards: ['Game Jam Plus - Best Concept', 'Game Jam Plus - Best Soundtrack', 'Game Jam Plus - 2nd Best Pitch', 'Game Jam Plus - 3rd Best Game']
};

export default chamaInfo;