const { merge } = require('webpack-merge');
const common = require('./webpack.config.base');

module.exports = merge(common, {
    output: {
        publicPath: './',
    },
    mode: 'production',
    // devtool: '',
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
});