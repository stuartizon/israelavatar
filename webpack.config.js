var path = require('path')

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    }
  },
  module: {
    rules: [
      { test: /\.tsx$/, use: ['ts-loader']},
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] }
    ]
  }
}
