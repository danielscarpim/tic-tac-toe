'use strict';

// Modules
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
      app:'./src/app.js',
      lib: [
              "angular"
            ],
    },
    output: {
        path: 'dist',
        filename: 'js/[name].bundle.js'
    },
    resolve: {
      // add alias for application code directory
      alias:{
        components: path.resolve( __dirname, './src/components/' ),
        scss: path.resolve( __dirname, './src/scss/' )
      },
      extensions: [ '', '.js', 'html', 'scss']
    },
    devServer: {
      contentBase: './dist',
      stats: 'minimal',
	  port: 8080
    },
    devtool: 'source-map',
    module: {
      loaders:[{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
              presets: ['es2015']
            }
      },{
        test: /\.scss$/,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap!sass?sourceMap!postcss')
      },{
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        loader: 'url?limit=100000&name=fonts/[name].[ext]'
      },{
        test: /\.(png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url?limit=100000&name=images/[name].[ext]'
      }]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        inject: 'body'
      }),
      new webpack.optimize.CommonsChunkPlugin("lib", "js/lib.bundle.js"),
      new ExtractTextPlugin("[name].css")
    ],
    sassLoader: {
      includePaths: [path.resolve(__dirname, "node_modules")]
    }
};
