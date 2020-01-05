export const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc.push(require(next).default);
        return acc;
    }, []);