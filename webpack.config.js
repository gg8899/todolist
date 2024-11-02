const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.j|tsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            strictMath: true,
                            noIeCompat: true,
                        },
                    },
                },]
            },
            {
                test: /\.tsx?$/, // 匹配 .ts 和 .tsx 文件
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'), // 将 @ 映射到 src 目录
        },
    },
    mode: 'development'

}