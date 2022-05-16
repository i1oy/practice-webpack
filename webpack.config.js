const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

let mode = "development";
if (process.env.NODE_ENV === "production") {
    mode = "production"
}
module.exports = {
    mode: mode,
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCSSExtractPlugin.loader,
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

    plugins: [new MiniCSSExtractPlugin()],

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