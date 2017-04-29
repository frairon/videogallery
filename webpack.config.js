const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname);
const APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
  entry: APP_DIR + "/index.js",
  target: 'electron',
  output: {
    filename: "app.js",
    path: BUILD_DIR,
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // {
      //   test: /\.scss$/,
      //   use: [{
      //       loader: "style-loader"
      //     }, {
      //       loader: "css-loader"
      //     },
      //   ]
      // },
    ],
  }

};
