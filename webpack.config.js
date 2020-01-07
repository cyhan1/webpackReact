const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/main.js', //唯一入口文件
    output: {
        path: __dirname + '/build', //打包后的文件存放的地方
        // path: __dirname.join(__dirname, './dist/'),
        filename: 'bundle.js' //打包后输出文件的文件名
    },
    devServer: {
        contentBase: './app/index.html', //本地服务所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        port: 5000, //设置默认端口
        hot: true
    },

    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                        // options: {
                        //     presets: ["env", "react"]
                        // }
                },
                exclude: /node_modules/
            },
            // { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html'
        }),

        new webpack.HotModuleReplacementPlugin(), //热加载插件

    ],

}