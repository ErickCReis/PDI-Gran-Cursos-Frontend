const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './app/src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/dist'),
    clean: true,
  },
  module: {
    rules: [{ test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }],
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/src/index.html',
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
  }
};
