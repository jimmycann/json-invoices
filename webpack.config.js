var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var productionConfig = {
    entry: path.resolve(__dirname, './public/index.js'),
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.[hash].js'
    },
    plugins: [
        new ngAnnotatePlugin({
            add: true
            // other ng-annotate options here
        }),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('style.[hash].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader:'babel-loader', exclude:'./~/node_modules'},
            {test: /\.html$/, loader:'raw', exclude:'./~/node_modules'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')}
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, 'public/node_modules')
    }
};

var config = {
    entry: path.resolve(__dirname, './public/index.js'),
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV==="test"
        }),
        new ExtractTextPlugin('style.css')
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader:'babel-loader', exclude: /node_modules/},
            {test: /\.html$/, loader:'raw', exclude: /node_modules/},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')}
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, 'public/node_modules')
    }
};
var exports;
if (process.env.NODE_ENV==="test" || process.env.NODE_ENV==="dev") {
    exports = config;
} else {
    exports = productionConfig;
}

module.exports = exports;
