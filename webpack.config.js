const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.ts",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist/")

    },
    // watch:true,这里是监听全部
    resolve: {
        alias: {
            "@components": path.resolve( __dirname, 'src/components'),
            "@assets": path.resolve( __dirname, 'src/assets/'),
            "@routes": path.resolve( __dirname, 'src/routes'),
            "@models": path.resolve( __dirname, 'src/models'),
            "@services": path.resolve( __dirname, 'src/services'),
            "@utils": path.resolve( __dirname, 'src/utils'),
            "@data": path.resolve( __dirname, 'src/data')
        },
        extensions:[".ts",".tsx",".js","json"]//import
    },
    module: {
        rules: [
            {
                test:/\.ts(x?)$/,
                use:{
                    loader:"awesome-typescript-loader",
                    loader:"babel-loader"
                },
                exclude: /node_modules/,
            },
            {
                test: /\.js(x?)$/,
                use: "babel-loader",
                exclude: [/node_modules/],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        // publicPath:"/dist",
        port: 3001,
        hot: true,
        open: true,
        inline: true,
        historyApiFallback: true,
        proxy: {
            '/api': {
              target: ' http://192.168.1.128:8080/AgTable',
            //   target: 'http://public-api-v1.aspirantzhang.com/',
              pathRewrite: { '^/api': '' },//it is import
              secure: false,
              changeOrigin: true
            }
          }

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), new HTMLPlugin(
            {filename: 'index.html', template: 'public/index.html'}
        ),
        new MiniCssExtractPlugin(
            { // 提取css
                filename: "/src/assets/[name].[hash:8].css",
                chunkFilename: "[name].[hash:8].css"
            }
        ),

    ]

}
