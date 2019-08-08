const path = require('path')

const common = require('./webpack.common')
const merge = require('webpack-merge')

//plugins
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },

    mode: "production",

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader"] //1. Turns sass into css
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }), 
        new CleanWebpackPlugin()
    ],

    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HTMLWebpackPlugin({
                template: "./src/template.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
            })
        ]
    },
})