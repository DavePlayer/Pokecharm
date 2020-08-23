const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.tsx',
    // entry: [
    // "webpack-dev-server/client?http://127.0.0.0:8080",
    // "webpack/hot/only-dev-server",
    // "./src"
    // ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "compiled.js",
        publicPath: '/',
    },
    devtool: "source-map",

    devServer: {
        host: '127.0.0.1',
        port: '8080',
        historyApiFallback: {
            disableDotRule: true
        },
        hot: true,
        compress: true,
        disableHostCheck: true,
        contentBase: path.resolve(__dirname, 'build'),
        open: true,
        // proxy: {
        //     '/*.*': { // Match all URL's with period/dot
        //         target: 'http://localhost:8080/',  // send to webpack dev server
        //         rewrite: function(req){
        //         req.url='index.html';  // Send to react app
        //         }
        //     }
        // }
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".sass", '.scss'],
        modules: ["src", "node_modules"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp|ttf|svg)$/,
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[ext]',
                  esModule: false,
                }
            },
        ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
    
};