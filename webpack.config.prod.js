const baseConfig = require('./webpack.config.base');

module.exports = {
    ...baseConfig,
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
}