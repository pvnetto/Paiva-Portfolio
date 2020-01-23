export const importAll = require =>
    require.keys().reduce((acc, next) => {
        if (next !== './index.js') acc.push(require(next).default);
        return acc;
    }, []);

export const projectsInfo = importAll(require.context('../info', false, /\.(js)$/));