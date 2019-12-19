const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = dotenv.config().parsed;

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // importLoaders: 1,
                            modules: true
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'url-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|obj)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/public/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                EMAILJS_USER_ID: JSON.stringify(process.env.EMAILJS_USER_ID)
            }
        }),
    ],
}