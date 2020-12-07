const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: 'development',

    devtool: 'source-map',

    entry: {
        'index': './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },

    module: {

        rules: [

            // 图片的解析处理
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        // placeholder 占位符 [name] 源资源模块的名称
                        // [ext] 源资源模块的后缀
                        name: "[name]_[hash].[ext]",
                        //打包后的存放位置
                        outputPath: "./images",
                        // 打包后文件的 url
                        publicPath: '../images',
                        // 小于 100 字节转成 base64 格式
                        limit: 100
                    }
                }
            },

            // css 文件的解析处理
            {
                test: /\.css$/,
                use: [
                    // "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // 启用/禁用 url() 处理
                            url: true,
                            // 启用/禁用 @import 处理
                            import: true,
                            // 启用/禁用 Sourcemap
                            sourceMap: true
                        }
                    }
                ]
            }

        ]

    },

    // 插件
    plugins: [
        // 使用clean-webpack-plugin清除构建目录
        new CleanWebpackPlugin(),

        // 使用HtmlWebpackPlugin 插件构建 HTML，并在模板html页面中添加一个按钮。
        new HtmlWebpackPlugin({
            // 解析以后生成到的文件路径和名称，目录相对于webpack.output.path 来进行设置
            filename: "index.html",
            // 指定原始的html文件（模板文件）
            template: "./template/index.html"
        }),

        // 使用 mini-css-extract-plugin 插件提取 css 到单独的文件中。
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],

    // 使用devServer配置一个webServer
    devServer: {
        // 自动开启浏览器
        open: true,
        // 端口
        port: 8080,
        // 开启热更新
        hot:true,
        // 即使 HMR 不生效，也不去刷新整个页面(选择开启)
        hotOnly:true,
    }

}