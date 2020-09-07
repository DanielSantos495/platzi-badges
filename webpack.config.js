const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlungin = require('mini-css-extract-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname,'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    // publicPath indica desde que carpeta tienen que empezar a buscar los archivos o assets
    publicPath: 'dist/',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  optimization: {
    minimizer: [
      // Estos plugins comprimimos mejor los archivos
      new TerserJSPlugin(),
      new OptimizeCssAssetsWebpackPlugin(),
    ]
  },
  module: {
    rules: [
      {
        test: /\.jpe?g|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
            loader: 'url-loader',
            options: {
              limit: 9000,
              name: '[name].[hash].[ext]',
              outputPath: 'assets',
            }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlungin.loader,
          },
          'css-loader',
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlungin({
      filename: 'css/[name].[hash].css',
      // estos no divide el archivo de css en chunks
      chunkFilename: 'css/[id].[hash].css',
    }),
    new webpack.DllReferencePlugin({
      manifest: path.join(__dirname, './modules-manifest.json'),
    }),
    // Agregamos automaticamente el dll al index.html
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
      outputPath: 'js',
      publicPath: 'dist/js',
    }),
    // Limpieamos las carpetas justo antes de hacer build, estos porque se nos duplican archivos
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'],
    })
  ],
}
