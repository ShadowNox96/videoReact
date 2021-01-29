const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    // aca es donde se van a guardar los archivos resultantes a la hora de hacer lac compilacion
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundel.js'
    },
    // resolver las extensiones que vamos a usar para el proyecto 
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        // reglas necesarias para el proyecto
        rules: [
            {
                // identificacion de los archivos js y jsx
                test: /\.(js|jsx)$/,
                // excluiimos la carpeta de node_modules
                exclude: /node_modules/,
                // utilizamos el loader instalado previamente
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
               test: /\.(s*)css$/,
               use: [
                    {
                   loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
     plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'

        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
};