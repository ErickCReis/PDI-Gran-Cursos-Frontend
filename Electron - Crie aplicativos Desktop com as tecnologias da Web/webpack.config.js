const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'app', 'js', 'renderer.js'),
    sobre: path.resolve(__dirname, 'app', 'js', 'sobre.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'electron/bin'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './app/sobre.html',
      filename: 'sobre.html',
      chunks: ['sobre'],
    }),
    new CopyPlugin({
      patterns: [
        { from: 'app/css', to: 'css' },
        { from: 'app/fonts', to: 'fonts' },
        { from: 'app/img', to: 'img' },
      ],
    }),
  ],
  watchOptions: {
    ignored: '**/node_modules',
    aggregateTimeout: 1000,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'electron/bin'),
    },
    port: 3000,
  },
};
