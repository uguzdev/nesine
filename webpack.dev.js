const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

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
        test: /\.(scss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
   }
 });