const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    a: './src/a.js',
    b: './src/b.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all"
        }
      }
    }
  }
};
