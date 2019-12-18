import chamaThumb from '../../../public/images/projects/chama_logo.png';
import rocoioThumb from '../../../public/images/projects/grand_rocoio_logo.png';
import pumpItThumb from '../../../public/images/projects/pump_it_logo.png';
import urnaiThumb from '../../../public/images/projects/urnai.png';
import ohHellThumb from '../../../public/images/projects/oh_hell_bot.png';
import kgbThumb from '../../../public/images/projects/kgb_login.png';
import nauThumb from '../../../public/images/projects/nau_home.png';

import rocoioGame from '../../../public/images/projects/grand_rocoio_gameplay.png';
import rocoioMenu from '../../../public/images/projects/grand_rocoio_menu.png';

export const categories = {
    ALL: 'All',
    WEB: 'Web',
    GAMES: 'Games',
    AI: 'AI'
}

export const techs = {
    ALL: 'All',
    JAVASCRIPT: 'JavaScript',
    PYTHON: 'Python',
    REACT: 'React',
    UNITY3D: 'Unity3D'
}

export const roles = {
    PROGRAMMER: 'Programmer',
    GAME_DESIGNER: 'Game Designer'
}

export const projectsInfo = [
    {
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
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod suscipit velit, ut condimentum arcu fermentum in.
            Quisque egestas facilisis ante et convallis. Pellentesque a nunc in ligula placerat consectetur.`,

            `In luctus ac ex vel sollicitudin. Aenean in tortor vel nulla efficitur efficitur sit amet ut orci.
            Sed dignissim diam purus, vel aliquam erat tincidunt at. In a orci nunc. Praesent nec risus sit amet
            justo venenatis molestie non nec sapien. In commodo maximus nibh, vitae porttitor mauris efficitur sed.`
            ,
        ],
        awards: []
    },
    {
        title: 'Grand Roçoio',
        category: categories.GAMES,
        techs: [techs.UNITY3D],
        roles: [roles.PROGRAMMER, roles.GAME_DESIGNER],
        thumbnail: rocoioThumb,
        links: {
            live: 'https://gamejolt.com/games/chama-bailao/430813',
        },
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod suscipit velit, ut condimentum arcu fermentum in.
            Quisque egestas facilisis ante et convallis. Pellentesque a nunc in ligula placerat consectetur.`,

            `In luctus ac ex vel sollicitudin. Aenean in tortor vel nulla efficitur efficitur sit amet ut orci.
            Sed dignissim diam purus, vel aliquam erat tincidunt at. In a orci nunc. Praesent nec risus sit amet
            justo venenatis molestie non nec sapien. In commodo maximus nibh, vitae porttitor mauris efficitur sed.`
        ],
        images: [
            rocoioGame,
            rocoioMenu,
        ],
        awards: []
    },
    {
        title: 'Pump It',
        category: categories.GAMES,
        techs: [techs.UNITY3D],
        roles: [roles.PROGRAMMER, roles.GAME_DESIGNER],
        thumbnail: pumpItThumb,
        links: {
            live: 'https://gamejolt.com/games/pump_it/420017',
        },
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod suscipit velit, ut condimentum arcu fermentum in.
            Quisque egestas facilisis ante et convallis. Pellentesque a nunc in ligula placerat consectetur.`,

            `In luctus ac ex vel sollicitudin. Aenean in tortor vel nulla efficitur efficitur sit amet ut orci.
            Sed dignissim diam purus, vel aliquam erat tincidunt at. In a orci nunc. Praesent nec risus sit amet
            justo venenatis molestie non nec sapien. In commodo maximus nibh, vitae porttitor mauris efficitur sed.`
        ],
        awards: []
    },
    {
        title: 'Kanban Gaming Board',
        category: categories.WEB,
        techs: [techs.JAVASCRIPT, techs.REACT],
        roles: [roles.PROGRAMMER],
        thumbnail: kgbThumb,
        links: {
            live: 'https://kanbangb.herokuapp.com/',
            github: 'https://github.com/pvnetto/Kanban-Gaming-Board-React',
        },
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod suscipit velit, ut condimentum arcu fermentum in.
            Quisque egestas facilisis ante et convallis. Pellentesque a nunc in ligula placerat consectetur.`,

            `In luctus ac ex vel sollicitudin. Aenean in tortor vel nulla efficitur efficitur sit amet ut orci.
            Sed dignissim diam purus, vel aliquam erat tincidunt at. In a orci nunc. Praesent nec risus sit amet
            justo venenatis molestie non nec sapien. In commodo maximus nibh, vitae porttitor mauris efficitur sed.`
        ],
        awards: []
    },
    {
        title: 'Nau Frutos do Mar',
        category: categories.WEB,
        techs: [techs.JAVASCRIPT],
        roles: [roles.PROGRAMMER],
        thumbnail: nauThumb,
        links: {
            live: 'https://nau-restaurante.herokuapp.com/',
            github: 'https://github.com/pvnetto/Nau-Website-Redesign',
        },
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod suscipit velit, ut condimentum arcu fermentum in.
            Quisque egestas facilisis ante et convallis. Pellentesque a nunc in ligula placerat consectetur.`,

            `In luctus ac ex vel sollicitudin. Aenean in tortor vel nulla efficitur efficitur sit amet ut orci.
            Sed dignissim diam purus, vel aliquam erat tincidunt at. In a orci nunc. Praesent nec risus sit amet
            justo venenatis molestie non nec sapien. In commodo maximus nibh, vitae porttitor mauris efficitur sed.`
        ],
        awards: []
    },
    {
        title: 'Oh Hell Bot',
        category: categories.WEB,
        techs: [techs.JAVASCRIPT],
        roles: [roles.PROGRAMMER],
        thumbnail: ohHellThumb,
        links: {
            live: 'https://telegram.me/fodinhagame',
            github: 'https://github.com/pvnetto/OhHellBot',
        },
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod suscipit velit, ut condimentum arcu fermentum in.
            Quisque egestas facilisis ante et convallis. Pellentesque a nunc in ligula placerat consectetur.`,

            `In luctus ac ex vel sollicitudin. Aenean in tortor vel nulla efficitur efficitur sit amet ut orci.
            Sed dignissim diam purus, vel aliquam erat tincidunt at. In a orci nunc. Praesent nec risus sit amet
            justo venenatis molestie non nec sapien. In commodo maximus nibh, vitae porttitor mauris efficitur sed.`
        ],
        awards: []
    },
    {
        title: 'URNAI Tools',
        category: categories.AI,
        techs: [techs.PYTHON],
        roles: [roles.PROGRAMMER],
        thumbnail: urnaiThumb,
        links: {
            github: 'https://github.com/pvnetto/URNAI-Tools',
        },
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod suscipit velit, ut condimentum arcu fermentum in.
                                            Quisque egestas facilisis ante et convallis. Pellentesque a nunc in ligula placerat consectetur.`,

            `In luctus ac ex vel sollicitudin. Aenean in tortor vel nulla efficitur efficitur sit amet ut orci.
                                            Sed dignissim diam purus, vel aliquam erat tincidunt at. In a orci nunc. Praesent nec risus sit amet
                                            justo venenatis molestie non nec sapien. In commodo maximus nibh, vitae porttitor mauris efficitur sed.`
        ],
        awards: []
    },
]