const baseConfig = require('./webpack.config.base');

module.exports = {
    ...baseConfig,
    mode: 'production',
    // devtool: '',
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
}