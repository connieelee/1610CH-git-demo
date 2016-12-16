const path = require('path');

module.exports = {
  entry: './browser/index.js',
  output: {
    path: path.resolve(__dirname, './browser/dist'),
    filename: 'bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
