module.exports = {
    devtool: "eval source map",
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方 
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }
            ]
        },
        {
            test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
            use: 'file-loader',
        }]
    }
}


