const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path');

let mode = "development";
if (process.env.NODE_ENV === "production") {
    mode = "production"
}
module.exports = {
    mode: mode,
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
                // type: "asset/inline",
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024
                //     }
                // }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    resolve: {
        extensions: [".js", ".jsx"],
    },

    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        // Since webpack-dev-server v4, HMR is enabled by default.
        // Usage via the CLI: `npx webpack serve --hot/--no-hot`
        hot: true,
    }
}