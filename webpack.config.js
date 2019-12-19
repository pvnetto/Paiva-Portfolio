const dotenv = require('dotenv');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {
    ...baseConfig,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
    plugins: [
        ...baseConfig.plugins,
        new webpack.DefinePlugin(envKeys)
    ]
}