/* global require __dirname module*/
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

let conf = {
    entry: {
        'index': './src/pages/index/index.js',
        'main': './src/pages/main/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
        // publicPath: 'dist/src/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                      {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                      },
                      { 
                        loader: 'sass-loader', 
                        options: { sourceMap: true }
                      }
                    ]
                })
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.mp4$/,
                loader: 'file-loader',
                options: {
                    name: 'video/[name].[ext]'
                }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: './src/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            chunks: ['main'],
            template: './src/pages/main/main.pug'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};

module.exports = (env, options) => {
    conf.devtool = options.mode === "production" ? 
                    false :
                    "inline-source-map";

    return conf;
};