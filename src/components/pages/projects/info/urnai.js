import { techs, roles, categories } from './types';
import urnaiThumb from '../../../../public/images/projects/urnai.png';

const urnaiInfo = {
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
};

export default urnaiInfo;