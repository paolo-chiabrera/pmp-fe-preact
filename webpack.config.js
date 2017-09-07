const path = require('path');
const webpack = require('webpack');
const pack = require('./package.json');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';
const isProd = ENV === 'production';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const UglifyJSPluginConfig = new UglifyJSPlugin({
  extractComments: true,
  compress: true,
  sourceMap: true,
  warningsFilter: () => false
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: 'src/assets', to: 'assets' }
]);

const CommonsChunkPluginConfig = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: '[name].[hash].js'
});

const extractSass = new ExtractTextPlugin({
  filename: 'bundle.[contenthash].css',
  disable: false
});

const plugins = [
  extractSass,
  CommonsChunkPluginConfig,
  HtmlWebpackPluginConfig,
  CopyWebpackPluginConfig
];

const prodPlugins = [UglifyJSPluginConfig];

const vendors = Object.keys(pack.dependencies).filter(
  name => name !== 'lodash'
);

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: vendors
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash'],
            presets: ['env']
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash'],
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      'create-react-class': 'preact-compat/lib/create-react-class'
    }
  },
  plugins: plugins.concat(isProd ? UglifyJSPluginConfig : [])
};
