/* global require, module, __dirname */

const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin'); // Copy assets to /docs

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.jsx'
    ],
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }))
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[hash]-[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              webp: {
                quality: 60,
                lossless: true,
              }
            },
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      state: path.resolve(__dirname, 'src/state'),
      styles: path.resolve(__dirname, 'src/components/styles'),
      images: path.resolve(__dirname, 'src/assets/images'),
    },
    extensions: ['.js', '.jsx']
  },

  devServer: {
    contentBase: './docs',
    historyApiFallback: true,
    hot: true,
    overlay: true,
  },

  plugins: [
    new CleanWebpackPlugin(['docs']),
    new CopyWebpackPlugin([{ from: './src/assets/images', to: 'assets/images' }]),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      inject: false,
      chunks: ['app'],
      template: require('html-webpack-template'), // eslint-disable-line
      appMountId: 'content'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new Dotenv({
      path: './.env',
    }),
  ]
};
