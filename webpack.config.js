var webpack = require('webpack');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var cssnext = require('postcss-cssnext');

var config = {
  app: ['./src/app.tsx'],
  tsxLoaders: ['awesome-typescript-loader']
}

var dev = process.env.NODE_ENV !== 'production';

if (dev) {
  config.app.unshift('webpack/hot/dev-server');
  config.tsxLoaders.unshift('react-hot');
}

module.exports = {
  entry: {
    app: config.app,
    vendor: ['react', 'react-dom', 'mobx', 'mobx-react']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js',
    publicPath: '' // '/' old
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.webpack.js', '.scss']
  },
  devServer: {
    port: 8080
  },
  devtool: 'source-map',
  debug: dev,
  module: {
    loaders: [

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.tsx?$/,
        loaders: config.tsxLoaders
      },
      {
        test: /mobx-react-devtools/,
        loader: dev ? 'noop' : 'null'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?camelCase', 'resolve-url-loader', 'sass-loader?sourceMap', 'postcss-loader?parser=postcss-scss'] // note: removed ?modules to disable css modules 'css-loader?modules&camelCase'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  postcss: function () {
    return {
      plugins: [cssnext]
    }
  },
  plugins: [
    new ForkCheckerPlugin(),
    new CopyWebpackPlugin([{from: 'src/assets', to: 'assets'}]),
    new HtmlWebpackPlugin({
      title: 'Mappit',
      template: './src/index.ejs'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
  ]
};
