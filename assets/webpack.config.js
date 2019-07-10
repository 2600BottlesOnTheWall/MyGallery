
var webpack = require('webpack');
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const devServer=require("./devServer/devServer.js")
const path = require("path");
module.exports = {

	entry:{
		 0:'./src/packages/post-edit/src/index.js',
		 1:'./src/packages/slider/src/index.js',
		 2:'./src/packages/add-gallery/src/index.js'
		},	
	output: {
		path: __dirname,
		filename: '../public/js/[name].bundle.js',

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
						name:"[name].[ext]",
						outputPath:"../public/images",
						publicPath:"../images"
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
	resolve: {
		alias: {
				"@my-gallery/media-frame": path.resolve(__dirname,"src/packages/media-frame/src/index.js"),
				"@my-gallery/helpers": path.resolve(__dirname,"src/packages/helpers/src/index.js"),
				"@my-gallery/post-edit": path.resolve(__dirname,"src/packages/post-edit/src/index.js"),
				"@my-gallery/config":path.resolve(__dirname,"src/packages/config/src/index.js"),

			}
	},
	plugins: [
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
		}),
		
		new MiniCssExtractPlugin({
			filename: "../public/css/[name].css",
			
		})
		  
	],
	devServer:{
		port:9000,
		contentBase: [path.resolve(__dirname, '../public/'),path.join(__dirname,'devServer/assert')],
		index:path.join(__dirname, 'devServer/index.html'),
		before:devServer
	}   
};

