var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output : {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {test: /\.css$/, use: ['style-loader','css-loader']},
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname,"dist"),
      stats:"errors-only",
      open:true
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'Charlife',
      template: './src/index.html'
    })]
}
