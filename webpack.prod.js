const path = require('path')

const common = require('./webpack.common')
const merge = require('webpack-merge')

//plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },

    mode: "production",

    plugins: [new CleanWebpackPlugin()],
})