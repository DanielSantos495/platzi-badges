const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    //Pasamos como entrada un array con las dependencias comunes que nosotros elijamos.
    // El bundle se llamara modules (podemos poner cualquiera nombre)
    modules: [
      'react',
      'react-dom',
      'react-router-dom',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].dll.js',
    library: '[name]',
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCssAssetsWebpackPlugin(),
    ]
  },
  plugins: [
   new webpack.DllPlugin({
     name: '[name]',
     path: path.join(__dirname, '[name]-manifest.json'),
   }),
   new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['**/modules.*'],
  })
  ],
}
