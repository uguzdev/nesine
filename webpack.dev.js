const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

 module.exports = merge(common, {
   mode: 'development',
   devServer: {
        port: 3000,
        hot: true,
        open: true,
   },
   module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            plugins: ['react-refresh/babel'],
          }
        },

      },
      {
        test: /\.(scss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
   },
   plugins:[
    new ReactRefreshWebpackPlugin(),
   ]
 });