const { merge } = require('webpack-merge');
const common = require('./webpack.config.base');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        historyApiFallback: true,
    },
});