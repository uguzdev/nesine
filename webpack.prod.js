const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  module:{
    rules:[
      {
        test: /\.(scss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({ filename: 'styles/[name].[fullhash].css' }),
  ]
});