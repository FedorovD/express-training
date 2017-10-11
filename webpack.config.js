const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLess = new ExtractTextPlugin({
    filename: "style.css",
});

module.exports = {
    entry: './src/javascript/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
           {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development 
                    fallback: "style-loader"
                })
            }

       ]
    },
    plugins: [
        extractLess,
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};





// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var path = require("path");

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.less$/,
//                 use: [{
//                     loader: "style-loader" // creates style nodes from JS strings
//                 }, {
//                     loader: "css-loader" // translates CSS into CommonJS
//                 }, {
//                     loader: "less-loader" // compiles Less to CSS
//                 }],
//                 publicPath: '/public/stylesheets/'
//             }
//         ]
//     },
//     devServer: {
//         contentBase: path.join(__dirname, "dist"),
//         compress: true,
//         stats: "errors-only",
//         open: true
//     },
//     plugins: [
//         new ExtractTextPlugin({
//             filename: 'app.css',
//             disable: false,
//             allChunks: true
//         })
//     ]
// }