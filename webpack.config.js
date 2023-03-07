const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode:'development',
  devtool:"source-map",
  stats:{
    children:true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: "Webpack start",
      template: "./public/index.html",
    })
  ]
};
