var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './js/main.js',
    output: {
        filename: './dist/main.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'react',
                            'es2015',
                            'stage-1'
                        ],
                        plugins: ['transform-decorators-legacy']
                    },
                }]
            },
            {
                test: /\.css?$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./dist/styles.css')
    ]
}
