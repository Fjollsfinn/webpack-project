var webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/*
const VENDOR_LIBS = [
    //Put your 3-rd party project dependencies here  
];
*/
const config = {
    entry: {
        bundle: './src/index.js',
        //vendor: VENDOR_LIBS
      },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js',
        //publicPath: 'build/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            }, 
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
          }),
        /*new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        })
        */
    ]
};

module.exports = config; 