const path = require('path');
const entryPath = path.join(__dirname, 'src'),
      outputPath = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(entryPath, 'app.js'),
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss|sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      // {
      //   test: /\.(css|less)$/,
      //   loaders: ['style-loader', 'css-loader', 'less-loader']
      // },
      // {
      //   test: /\.(css)$/,
      //   loaders: ['style-loader', 'css-loader', 'postcss-loader']
      // }
    ]
  },
  devServer: {
    contentBase: outputPath
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}