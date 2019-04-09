
var webpack = require('webpack');
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {

	entry:{
		 0:'./assets/js/post-edit/src/index.js',
		 1:'./assets/js/gallery/src/index.js'
		},	
	output: {
		path: __dirname,
		filename: './public/js/[name].bundle.js',

	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options:{
					presets:["@babel/preset-env","@babel/preset-react"]
				}
				
			},
			{
				test: /\.css$/,
				use: [
				  MiniCssExtractPlugin.loader,
				  "css-loader"
				]
			  },
			  {
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
				  {
					loader: 'file-loader',
					options: {
					  name:"../images/[name].[ext]"
					},
				  },
				],
			  }
		],
	},
	optimization:{
		minimizer: [
			new TerserJSPlugin({}),
			new OptimizeCSSAssetsPlugin({})
		  ]

	},
	externals:{
		'react':'window.React',
		'react-dom':'window.ReactDOM',
		'lodash':'window.lodash',
		'globals':'window',
		'jquery':'window.jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
		}),
		
		new MiniCssExtractPlugin({
			filename: "./public/css/[name].css",
			
		})
		  
	],
};

