import { techs, roles, categories } from './types';
import { importAll } from './helpers';
import fastBoxThumb from '../../../../public/images/projects/fast_box_thumb.png';

const fastBoxImages = importAll(
    require.context('../../../../public/images/projects/fastbox', false, /\.(png|jpe?g|svg)$/)
);

const fastBoxInfo = {
    title: 'FastBox Serviços Automotivos',
    category: categories.WEB,
    techs: [techs.REACT, techs.NEXT_JS, techs.SCSS],
    roles: [roles.PROGRAMMER],
    thumbnail: fastBoxThumb,
    links: {
        live: 'https://fastbox.now.sh/',
        github: 'https://github.com/pvnetto/FastBox-Site',
    },
    description: [
        `Webpage for FastBox Serviços Automotivos, a car repair shop based in Natal/RN, Brazil.`,

        `The main features of this application are its mobile-first design and server-side-rendering with Next.JS. The reason I've opted
        for server-side-rendering is because SEO was a priority, and it is known that pure React applications can't deliver good SEO.`
    ],
    images: fastBoxImages,
    awards: []
};

export default fastBoxInfo;