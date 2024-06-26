import { techs, roles, categories } from './types';
import fortniteThumb from '../../../../public/images/projects/fortnite_logo.jpg';

const fortniteInfo = {
    title: 'Fortnite: Battle Royale',
    category: categories.GAMES,
    techs: [techs.CPP, techs.UNREAL],
    roles: [roles.PROGRAMMER],
    thumbnail: fortniteThumb,
    links: {
        live: 'https://www.fortnite.com/?lang=en-US',
    },
    description: [
        `From Wikipedia: Fortnite is an online video game and game platform developed by Epic Games and released in 2017. It is available in six distinct game mode versions that
        otherwise share the same general gameplay and game engine: Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be
        the last person standing; Fortnite: Save the World, a cooperative hybrid tower defense-shooter and survival game in which up to four players fight off zombie-like
        creatures and defend objects with traps and fortifications they can build; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas,
        Lego Fortnite, an open world survival game, Rocket Racing, a racing game, and Fortnite Festival, a rhythm game.`,
    ],
};

export default fortniteInfo;