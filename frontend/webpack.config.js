const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "compiled.js"
    },
    devtool: "source-map",

    devServer: {
        host: 'localhost',
        port: '8080',
        historyApiFallback: true,
        hot: true,
        contentBase: path.resolve(__dirname, 'build'),
        open: true,
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
            }
        ]
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