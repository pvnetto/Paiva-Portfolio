import { techs, roles, categories } from './types';
import { importAll } from './helpers';
import kgbThumb from '../../../../public/images/projects/kgb_thumb.png';

const kgbImages = importAll(
    require.context('../../../../public/images/projects/kgb', false, /\.(png|jpe?g|svg)$/)
);

const kgbInfo = {
    title: 'Kanban Gaming Board',
    category: categories.WEB,
    techs: [techs.REACT, techs.REDUX, techs.NODE, techs.SCSS, techs.BOOTSTRAP, techs.FIREBASE, techs.AUTH0],
    roles: [roles.PROGRAMMER],
    thumbnail: kgbThumb,
    links: {
        live: 'https://kanbangb.herokuapp.com/',
        github: 'https://github.com/pvnetto/Kanban-Gaming-Board-React',
    },
    description: [
        `Kanban Gaming Board is a project management application like Trello or Hack'n'plan, but designed for game development,
        so all of its features are adapted to this context. Even though it was developed using only front-end technologies and
        a minimal NodeJS setup, it allows user authentication/authorization with multiple social providers through Auth0, and persists
        user data on a cloud database through Firebase/Firestore.`,

        `Some of its main features are: User authentication and authorization with multiple social providers; creating/deleting/editing as many 
        projects/boards/tasks as you want; drag'n'drop for tasks; authorizing other users to participate in your project, and many more.`
    ],
    images: kgbImages,
    awards: []
};

export default kgbInfo;