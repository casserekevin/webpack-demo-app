const path = require('path')

//plugins
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"] //Order mather 
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/template.html"
        })
    ],

}