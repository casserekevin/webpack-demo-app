const path = require('path')

//plugins
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"] //Order mather 
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/template.html"
        })
    ],

}