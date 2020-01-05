import { techs, roles, categories } from './types';
import ohHellThumb from '../../../../public/images/projects/oh_hell_bot.png';

const ohHellInfo = {
    title: 'Oh Hell Bot',
    category: categories.WEB,
    techs: [techs.VANILLA_JS, techs.NODE, techs.JEST],
    roles: [roles.PROGRAMMER],
    thumbnail: ohHellThumb,
    links: {
        live: 'https://telegram.me/fodinhagame',
        github: 'https://github.com/pvnetto/OhHellBot',
    },
    description: [
        `Oh Hell bot is a Telegram Bot I made for playing a british card game called Oh Hell, also known as Dane-se in Brazil. I made this
        project to practice back-end development of Rest APIs with Node.JS.`,

        `To start playing, an user must add the bot to a group and start a new game lobby, which can be joined by other players on the group. 
        Once the match starts, players are able to play cards and place bets by using Telegram inline commands.`,
    ],
    awards: []
};

export default ohHellInfo;