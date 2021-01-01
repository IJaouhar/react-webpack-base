const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const publicPath = '/';

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.tsx'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ]
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
      },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})
	],
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		port: 3000,
		host: 'localhost',
	}
};
