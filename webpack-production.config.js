import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin';

import { name } from './package.json';

export default [{
  entry: [
    './src/client/main.ts',
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: name,
      template: 'src/client/views/pages/home.html',
    }),
  ],
  output: {
    filename: 'main.js',
    path: `${__dirname}/dist/client`,
  },
}];
