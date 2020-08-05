const path = require('path')

module.exports = {
	entry: {
		main: './main.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							[
								'@babel/plugin-transform-react-jsx',
								{ pragma: 'ToyReact.createElement' },
							],
						],
					},
				},
			},
		],
	},
	devServer: {
		port: 9000,
		contentBase: path.join(__dirname, 'public'),
		filename: '[name].bundle.js',
		hot: true,
		index: 'index.html',
		publicPath: '/dist/',
	},
	output: {
		filename: '[name].bundle.js',
	},
	// devtool: 'inline-source-map', 该配置会导致 webpack 不显示转换后的代码
	mode: 'development',
	optimization: {
		minimize: false,
	},
}
