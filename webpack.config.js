const webpack = require("webpack");

module.exports = {
	entry: [
		"react-hot-loader/patch",
		"./src/index.js"
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/,
				use: [ "style-loader", "css-loader" ]
			}
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.EvalSourceMapDevToolPlugin({
			filename: "[name].js.map",
			exclude: ["vendor.js"]
		})
	],
	devServer: {
		contentBase: "./dist",
		hot: true
	}
};
