module.exports = {
  entry: './files/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};