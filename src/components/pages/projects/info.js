import chamaThumb from '../../../public/images/projects/chama_logo.png';
import rocoioThumb from '../../../public/images/projects/grand_rocoio_logo.png';
import pumpItThumb from '../../../public/images/projects/pump_it_logo.png';
import urnaiThumb from '../../../public/images/projects/urnai.png';
import ohHellThumb from '../../../public/images/projects/oh_hell_bot.png';
import kgbThumb from '../../../public/images/projects/kgb_thumb.png';
import nauThumb from '../../../public/images/projects/nau_thumb.png';

export const categories = {
    ALL: 'All',
    WEB: 'Web',
    GAMES: 'Game',
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

const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc.push(require(next).default);
        return acc;
    }, []);

const kgbImages = importAll(
    require.context('../../../public/images/projects/kgb', false, /\.(png|jpe?g|svg)$/)
);

const nauImages = importAll(
    require.context('../../../public/images/projects/nau', false, /\.(png|jpe?g|svg)$/)
);

const chamaImages = importAll(
    require.context('../../../public/images/projects/chama', false, /\.(png|jpe?g|svg)$/)
);

const grandRocoioImages = importAll(
    require.context('../../../public/images/projects/grand_rocoio', false, /\.(png|jpe?g|svg)$/)
);

const pumpItImages = importAll(
    require.context('../../../public/images/projects/pump_it', false, /\.(png|jpe?g|svg)$/)
);

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
            `Chama! is a mobile rhythm game series about brazilian music styles. The first title 'Bailão' is about funk and bregafunk,
            which are currently two of the most popular styles in Brazil.`,

            `The player uses both thumbs to press and drag shown symbols in a sequence following the rhythm of the songs as your avatar 
            dances accordingly. Unlike other games which offer a linear path and a few short free movement sections, 'Chama! Bailão' 
            often gives the player the option to choose between three paths of movement, each one with a different difficulty and 
            resulting in different dance moves. The player can change to other paths during playthrough at given moments, so the difficulty is dynamic.`
            ,
        ],
        images: chamaImages,
        awards: []
    },
    {
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
            `Pump It is a 2D sidescroller game for PC that mixes rhythm with resource management. The player controls the heart of a living 
            person in its struggle to collect and send red and white cells to the rest of the organs in order to keep the 
            human alive while avoiding bacterias. Poorly manage your resources and you find yourself having to beat faster and faster, 
            leading to a much harder game over time.`,

            `Weak organs also affect your experience. While weak kidneys might increase the amount of bacterias in your veins, a weak 
            brain will suddenly strike you with a debuff what will move you the opposite direction you choose. Manage carefully!`
        ],
        images: pumpItImages,
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
            `Kanban Gaming Board is a Kanban Board application like Trello or Hack'n'plan, but designed for game development,
            so all of its features are adapted to this context. Even though it was developed using only front-end technologies and
            a minimal NodeJS setup, it allows user authentication/authorization with multiple social providers using Auth0, and persists
            user data on a Firebase/Firestore cloud database.`,

            `Some of its main features are: User authentication and authorization with multiple social providers; creating/deleting/editing as many projects,
            boards and tasks as you want; drag'n'drop of tasks; authorizing other users to participate in your project, and many more.`
        ],
        images: kgbImages,
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
            `This project is a redesign I made for a local seafood restaurant. It's not an official redesign, so the company didn't ask me to do it,
            I did it for study purposes only.`,

            `The main goal of this project was to take a dated website from a well-established local brand and make it more fit to the current
            standards of web development, with a modern, mobile-first design. `
        ],
        images: nauImages,
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
            `Oh Hell bot is a Telegram Bot I made for playing Oh Hell, a brittish card game, also known as Dane-se in Brazil. I made this
            project to practice back-end development of Rest APIs with Node.JS.`,

            `To start playing, an user must add the bot to a group and start a new game lobby, which can be joined by other players on the group. 
            Once the match starts, players are able to play cards and place bets by using Telegram inline commands.`,
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
            `URNAI Tools is a modular Deep Reinforcement Learning library that supports multiple environments, such as PySC2, OpenAI Gym, 
            and PyGame Learning Environment.`,

            `The main goal of URNAI Tools is to provide an easy way to develop DRL agents in a way that allows the developer to reuse as much 
            code as possible when developing different agents, and that also allows him to reuse previously implemented models in different 
            environments and to integrate new environments easily when necessary. The main advantage of using URNAI Tools is that the models 
            you make for one environment will also work in other environments, so you can prototype new agents for different environments very easily.`
        ],
        awards: []
    },
]