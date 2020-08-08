const path = require('path')

module.exports = {
  entry: {
    main: './main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-react-jsx',  
                { pragma: 'ToyReact.createElement' }  // default pragma is React.createElement (only in classic runtime) https://babeljs.io/docs/en/babel-preset-react
              ]
            ]
          }
        }
      }
    ]
  },
  mode: "development",
  optimization: {
    minimize: false
  }
};