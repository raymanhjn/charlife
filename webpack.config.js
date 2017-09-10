var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

var isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
      app: './src/index.js'
    },
    output : {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {test: /\.css$/, use: ['style-loader','css-loader']},
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
        { test: /\.(ttf|eot)$/, loader: 'file-loader' },
        { test: /\.(png|jpg|gif)$/, use: [{ loader: 'file-loader', options: {}}]}
      ],
    },
    devServer: {
      contentBase: path.join(__dirname,"dist"),
      stats:"errors-only",
      hot:true,
      open:true
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Charlife',
        template: './index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
}
