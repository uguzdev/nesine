const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')

dotenv.config();

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  output: {
    filename: '[name].[fullhash].js',
  },
}
