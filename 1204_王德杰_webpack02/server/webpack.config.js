const path = require('path');

module.exports = {
    mode:'development',

    entry:{
        'index': './src/index.js'
    },

    output:{
        // 一定是绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    // 配置模块解析规则
    module:{
        rules:[
            {
                // 这个loader将图片资源文件打包到images目录
                test:/\.(png|jpe?g|gif)$/,
                use:{
                    loader: "url-loader",
                    options:{
                        // 占位符[name]表示资源模块名称
                        // 占位符[ext]表示资源模块的后缀
                        name:"[name]_[hash].[ext]",
                        // 打包后的存放位置，相对于全局的output.path
                        outputPath: "./images",
                        // 打包后文件对外提供的访问路径
                        publicPath: '../dist/images',
                    }
                }
            },

            {
                // 这个规则先后引用了css-loader,style-loader
                // 读取css文件模块，并自动挂载到html文件中的<style>标签下
                test:/\.css$/,
                use:[ "style-loader",{
                        loader:"css-loader",  // 基于css-loader
                        options:{
                            url: true,  // 启用url()处理
                            import: true,  // 启用@import处理
                            sourceMap: false // 禁用sourceMap
                        }
                    }
                ]
            }
        ]
    }
}